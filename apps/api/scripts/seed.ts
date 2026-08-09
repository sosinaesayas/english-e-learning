import "reflect-metadata";
import * as fs from "fs";
import * as path from "path";
import * as bcrypt from "bcryptjs";
import { NestFactory } from "@nestjs/core";
import { getModelToken } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Role, COURSE_LEVEL_LABEL } from "@tutor/shared";
import { AppModule } from "../src/app.module";
import { UsersService } from "../src/modules/users/users.service";
import { User, UserDocument } from "../src/modules/users/schemas/user.schema";
import { Course, CourseDocument } from "../src/modules/courses/schemas/course.schema";
import {
  CourseModule as CourseModuleEntity,
  ModuleDocument,
} from "../src/modules/courses/schemas/module.schema";
import { Lesson, LessonDocument } from "../src/modules/courses/schemas/lesson.schema";

const CONTENT_DIR = path.resolve(__dirname, "../../../content");
const UPLOADS_DIR = path.resolve(__dirname, "../uploads/curriculum");
const FILE_RE = /^L(\d+)-M(\d+)-(.+)\.pptx$/i;

function toTitle(slug: string) {
  return slug.replace(/-/g, " ");
}

async function seedCurriculum(
  courseModel: Model<CourseDocument>,
  moduleModel: Model<ModuleDocument>,
  lessonModel: Model<LessonDocument>,
  adminId: string,
) {
  for (let level = 1; level <= 4; level++) {
    const dirPath = path.join(CONTENT_DIR, `level ${level}`);
    if (!fs.existsSync(dirPath)) {
      console.warn(`Skipping level ${level}: ${dirPath} not found`);
      continue;
    }

    const title = COURSE_LEVEL_LABEL[level as 1 | 2 | 3 | 4];
    let course = await courseModel.findOne({ level });
    if (!course) {
      course = await courseModel.create({
        title,
        level,
        description: `${title} — a full course for learners of this level.`,
        isPublished: true,
        createdBy: adminId,
      });
      console.log(`Created course: ${title}`);
    }

    const files = fs
      .readdirSync(dirPath)
      .filter((f) => f.toLowerCase().endsWith(".pptx"))
      .filter((f) => FILE_RE.test(f))
      .sort((a, b) => {
        const ma = Number(a.match(FILE_RE)![2]);
        const mb = Number(b.match(FILE_RE)![2]);
        return ma - mb;
      });

    const levelUploadsDir = path.join(UPLOADS_DIR, `level-${level}`);
    fs.mkdirSync(levelUploadsDir, { recursive: true });

    for (const file of files) {
      const match = file.match(FILE_RE)!;
      const moduleOrder = Number(match[2]);
      const moduleTitle = `Module ${moduleOrder}: ${toTitle(match[3])}`;

      let mod = await moduleModel.findOne({ courseId: course._id, order: moduleOrder });
      if (!mod) {
        mod = await moduleModel.create({
          courseId: course._id,
          title: moduleTitle,
          order: moduleOrder,
        });
      }

      fs.copyFileSync(path.join(dirPath, file), path.join(levelUploadsDir, file));
      const slidesUrl = `/uploads/curriculum/level-${level}/${encodeURIComponent(file)}`;

      const existingLesson = await lessonModel.findOne({ moduleId: mod._id });
      if (!existingLesson) {
        await lessonModel.create({
          moduleId: mod._id,
          title: toTitle(match[3]),
          order: 1,
          slidesUrl,
          resources: [],
        });
      } else {
        existingLesson.slidesUrl = slidesUrl;
        await existingLesson.save();
      }
    }
    console.log(`Seeded ${files.length} modules for ${title}`);
  }
}

async function upsertUser(
  usersService: UsersService,
  userModel: Model<UserDocument>,
  input: { name: string; email: string; password: string; role: Role },
) {
  const existing = await usersService.findByEmail(input.email);
  if (existing) return existing;
  const passwordHash = await bcrypt.hash(input.password, 10);
  const user = await usersService.create({
    name: input.name,
    email: input.email,
    passwordHash,
    role: input.role,
  });
  console.log(`Created ${input.role}: ${input.email} / ${input.password}`);
  return user;
}

async function run() {
  const app = await NestFactory.createApplicationContext(AppModule, {
    logger: ["error", "warn"],
  });

  const usersService = app.get(UsersService);
  const userModel = app.get<Model<UserDocument>>(getModelToken(User.name));
  const courseModel = app.get<Model<CourseDocument>>(getModelToken(Course.name));
  const moduleModel = app.get<Model<ModuleDocument>>(getModelToken(CourseModuleEntity.name));
  const lessonModel = app.get<Model<LessonDocument>>(getModelToken(Lesson.name));

  const admin = await upsertUser(usersService, userModel, {
    name: "Admin",
    email: "admin@englishacademy.local",
    password: "Admin123!",
    role: Role.Admin,
  });

  const teacher = await upsertUser(usersService, userModel, {
    name: "Teacher Demo",
    email: "teacher@englishacademy.local",
    password: "Teacher123!",
    role: Role.Teacher,
  });

  await seedCurriculum(courseModel, moduleModel, lessonModel, admin._id.toString());

  const beginnerCourse = await courseModel.findOne({ level: 1 });

  const student = await upsertUser(usersService, userModel, {
    name: "Student Demo",
    email: "student@englishacademy.local",
    password: "Student123!",
    role: Role.Student,
  });
  await userModel.findByIdAndUpdate(student._id, {
    assignedTeacherId: teacher._id,
    courseId: beginnerCourse?._id,
  });

  console.log("\nSeed complete. Login with:");
  console.log("  admin@englishacademy.local / Admin123!");
  console.log("  teacher@englishacademy.local / Teacher123!");
  console.log("  student@englishacademy.local / Student123!");

  await app.close();
}

run()
  .then(() => process.exit(0))
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
