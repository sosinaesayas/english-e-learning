import { BadRequestException, Body, Controller, Delete, Get, NotFoundException, Param, Patch, Post } from "@nestjs/common";
import { Role } from "@tutor/shared";
import { CoursesService } from "./courses.service";
import { UsersService } from "../users/users.service";
import { CertificatesService } from "../certificates/certificates.service";
import { EmailService } from "../notifications/email.service";
import { courseCompletedEmail } from "../notifications/email-templates";
import { Roles } from "../../common/decorators/roles.decorator";
import { CurrentUser } from "../../common/decorators/current-user.decorator";
import { CreateCourseDto, UpdateCourseDto } from "./dto/course.dto";
import { CreateModuleDto } from "./dto/module.dto";
import { ToggleLessonCompleteDto } from "./dto/lesson.dto";
import type { JwtPayload } from "@tutor/shared";

@Controller("courses")
export class CoursesController {
  constructor(
    private coursesService: CoursesService,
    private usersService: UsersService,
    private certificatesService: CertificatesService,
    private emailService: EmailService,
  ) {}

  @Get()
  findAll() {
    return this.coursesService.findAll();
  }

  @Get("me/progress")
  @Roles(Role.Student)
  async myProgress(@CurrentUser() user: JwtPayload) {
    const student = await this.usersService.findById(user.sub);
    if (!student?.courseId) {
      return { courseId: null, completedLessonIds: [], totalLessons: 0, completedCount: 0, percent: 0 };
    }
    const courseId = String(student.courseId);
    const totalLessons = await this.coursesService.countLessonsForCourse(courseId);
    const completedLessonIds = (student.completedLessonIds ?? []).map(String);
    const completedCount = completedLessonIds.length;
    const percent = totalLessons > 0 ? Math.round((completedCount / totalLessons) * 100) : 0;
    return { courseId, completedLessonIds, totalLessons, completedCount, percent };
  }

  @Patch("me/lessons/:lessonId")
  @Roles(Role.Student)
  async toggleLesson(
    @Param("lessonId") lessonId: string,
    @Body() dto: ToggleLessonCompleteDto,
    @CurrentUser() user: JwtPayload,
  ) {
    const student = await this.usersService.findById(user.sub);
    if (!student?.courseId) throw new BadRequestException("You have no course assigned");
    const courseId = String(student.courseId);

    const lessonIds = await this.coursesService.lessonIdsForCourse(courseId);
    if (!lessonIds.includes(lessonId)) throw new NotFoundException("Lesson not found in your course");

    await this.usersService.toggleLessonComplete(user.sub, lessonId, dto.completed);
    const updated = await this.usersService.findById(user.sub);
    const completedLessonIds = (updated!.completedLessonIds ?? []).map(String);
    const totalLessons = lessonIds.length;
    const completedCount = completedLessonIds.length;
    const percent = totalLessons > 0 ? Math.round((completedCount / totalLessons) * 100) : 0;

    let certificateIssued = false;
    if (percent === 100 && student.assignedTeacherId) {
      const { cert, alreadyIssued } = await this.certificatesService.issue(
        user.sub,
        String(student.assignedTeacherId),
      );
      certificateIssued = !alreadyIssued;
      if (certificateIssued) {
        await this.emailService.send({
          to: student.email,
          subject: "Congratulations — course completed!",
          html: courseCompletedEmail((cert.courseId as any).title),
        });
      }
    }

    return { completedLessonIds, totalLessons, completedCount, percent, certificateIssued };
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.coursesService.findOneWithContent(id);
  }

  @Post()
  @Roles(Role.Admin)
  create(@Body() dto: CreateCourseDto, @CurrentUser() user: JwtPayload) {
    return this.coursesService.create(dto, user.sub);
  }

  @Patch(":id")
  @Roles(Role.Admin)
  update(@Param("id") id: string, @Body() dto: UpdateCourseDto) {
    return this.coursesService.update(id, dto);
  }

  @Delete(":id")
  @Roles(Role.Admin)
  async remove(@Param("id") id: string) {
    await this.coursesService.remove(id);
    return { ok: true };
  }

  @Post(":id/modules")
  @Roles(Role.Admin)
  createModule(@Param("id") id: string, @Body() dto: CreateModuleDto) {
    return this.coursesService.createModule(id, dto);
  }
}
