import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Course, CourseDocument } from "./schemas/course.schema";
import { CourseModule as CourseModuleEntity, ModuleDocument } from "./schemas/module.schema";
import { Lesson, LessonDocument } from "./schemas/lesson.schema";
import { CreateCourseDto, UpdateCourseDto } from "./dto/course.dto";
import { CreateModuleDto, UpdateModuleDto } from "./dto/module.dto";
import { CreateLessonDto, UpdateLessonDto } from "./dto/lesson.dto";

@Injectable()
export class CoursesService {
  constructor(
    @InjectModel(Course.name) private courseModel: Model<CourseDocument>,
    @InjectModel(CourseModuleEntity.name) private moduleModel: Model<ModuleDocument>,
    @InjectModel(Lesson.name) private lessonModel: Model<LessonDocument>,
  ) {}

  findAll() {
    return this.courseModel.find().sort({ level: 1 });
  }

  count() {
    return this.courseModel.countDocuments();
  }

  findById(id: string) {
    return this.courseModel.findById(id);
  }

  async findOneWithContent(id: string) {
    const course = await this.courseModel.findById(id);
    if (!course) throw new NotFoundException("Course not found");

    const modules = await this.moduleModel.find({ courseId: id }).sort({ order: 1 });
    const lessons = await this.lessonModel
      .find({ moduleId: { $in: modules.map((m) => m._id) } })
      .sort({ order: 1 });

    return {
      course,
      modules: modules.map((mod) => ({
        module: mod,
        lessons: lessons.filter((l) => String(l.moduleId) === String(mod._id)),
      })),
    };
  }

  create(dto: CreateCourseDto, createdBy: string) {
    return this.courseModel.create({ ...dto, createdBy });
  }

  async update(id: string, dto: UpdateCourseDto) {
    const course = await this.courseModel.findByIdAndUpdate(id, dto, { new: true });
    if (!course) throw new NotFoundException("Course not found");
    return course;
  }

  async remove(id: string) {
    const modules = await this.moduleModel.find({ courseId: id });
    await this.lessonModel.deleteMany({ moduleId: { $in: modules.map((m) => m._id) } });
    await this.moduleModel.deleteMany({ courseId: id });
    await this.courseModel.findByIdAndDelete(id);
  }

  async createModule(courseId: string, dto: CreateModuleDto) {
    const course = await this.courseModel.findById(courseId);
    if (!course) throw new NotFoundException("Course not found");
    const order = dto.order ?? (await this.moduleModel.countDocuments({ courseId })) + 1;
    return this.moduleModel.create({ courseId, title: dto.title, order });
  }

  async updateModule(id: string, dto: UpdateModuleDto) {
    const mod = await this.moduleModel.findByIdAndUpdate(id, dto, { new: true });
    if (!mod) throw new NotFoundException("Module not found");
    return mod;
  }

  async removeModule(id: string) {
    await this.lessonModel.deleteMany({ moduleId: id });
    await this.moduleModel.findByIdAndDelete(id);
  }

  async createLesson(moduleId: string, dto: CreateLessonDto) {
    const mod = await this.moduleModel.findById(moduleId);
    if (!mod) throw new NotFoundException("Module not found");
    const order = dto.order ?? (await this.lessonModel.countDocuments({ moduleId })) + 1;
    return this.lessonModel.create({ ...dto, moduleId, order });
  }

  async updateLesson(id: string, dto: UpdateLessonDto) {
    const lesson = await this.lessonModel.findByIdAndUpdate(id, dto, { new: true });
    if (!lesson) throw new NotFoundException("Lesson not found");
    return lesson;
  }

  async removeLesson(id: string) {
    await this.lessonModel.findByIdAndDelete(id);
  }

  async countLessons() {
    return this.lessonModel.countDocuments();
  }

  async lessonIdsForCourse(courseId: string): Promise<string[]> {
    const modules = await this.moduleModel.find({ courseId }, "_id");
    const lessons = await this.lessonModel.find(
      { moduleId: { $in: modules.map((m) => m._id) } },
      "_id",
    );
    return lessons.map((l) => String(l._id));
  }

  async countLessonsForCourse(courseId: string) {
    return (await this.lessonIdsForCourse(courseId)).length;
  }
}
