import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { Role } from "@tutor/shared";
import type { JwtPayload } from "@tutor/shared";
import { HomeworkService } from "./homework.service";
import { UsersService } from "../users/users.service";
import { EmailService } from "../notifications/email.service";
import { homeworkGradedEmail } from "../notifications/email-templates";
import { Roles } from "../../common/decorators/roles.decorator";
import { CurrentUser } from "../../common/decorators/current-user.decorator";
import { CreateHomeworkDto, GradeHomeworkDto, SubmitHomeworkDto, UpdateHomeworkDto } from "./dto/homework.dto";

function toPublic(hw: any) {
  const obj = hw.toObject ? hw.toObject() : hw;
  return {
    id: String(obj._id),
    course: obj.courseId && {
      id: String(obj.courseId._id ?? obj.courseId),
      title: obj.courseId.title,
      level: obj.courseId.level,
    },
    teacherId: String(obj.teacherId),
    title: obj.title,
    description: obj.description,
    dueDate: obj.dueDate,
    students: (obj.studentIds ?? []).map((s: any) => ({
      id: String(s._id ?? s),
      name: s.name,
      email: s.email,
    })),
    submissions: (obj.submissions ?? []).map((s: any) => ({
      studentId: String(s.studentId),
      text: s.text,
      submittedAt: s.submittedAt,
      grade: s.grade,
      feedback: s.feedback,
    })),
  };
}

/** Scope list queries to the caller's own homework unless they're an admin. */
function scopeFor(user: JwtPayload) {
  if (user.role === Role.Teacher) return { teacherId: user.sub };
  if (user.role === Role.Student) return { studentId: user.sub };
  return {};
}

@Controller("homework")
export class HomeworkController {
  constructor(
    private homeworkService: HomeworkService,
    private usersService: UsersService,
    private emailService: EmailService,
  ) {}

  @Get()
  async findAll(@CurrentUser() user: JwtPayload) {
    const homework = await this.homeworkService.findAll(scopeFor(user));
    return homework.map(toPublic);
  }

  @Post()
  @Roles(Role.Teacher)
  async create(@Body() dto: CreateHomeworkDto, @CurrentUser() user: JwtPayload) {
    return toPublic(await this.homeworkService.create(dto, user.sub));
  }

  @Patch(":id")
  @Roles(Role.Teacher)
  async update(
    @Param("id") id: string,
    @Body() dto: UpdateHomeworkDto,
    @CurrentUser() user: JwtPayload,
  ) {
    return toPublic(await this.homeworkService.update(id, dto, user.sub));
  }

  @Delete(":id")
  @Roles(Role.Teacher)
  async remove(@Param("id") id: string, @CurrentUser() user: JwtPayload) {
    await this.homeworkService.remove(id, user.sub);
    return { ok: true };
  }

  @Post(":id/submit")
  @Roles(Role.Student)
  async submit(
    @Param("id") id: string,
    @Body() dto: SubmitHomeworkDto,
    @CurrentUser() user: JwtPayload,
  ) {
    return toPublic(await this.homeworkService.submit(id, user.sub, dto));
  }

  @Patch(":id/grade/:studentId")
  @Roles(Role.Teacher)
  async grade(
    @Param("id") id: string,
    @Param("studentId") studentId: string,
    @Body() dto: GradeHomeworkDto,
    @CurrentUser() user: JwtPayload,
  ) {
    const hw = await this.homeworkService.grade(id, studentId, dto, user.sub);
    const student = await this.usersService.findById(studentId);
    if (student) {
      await this.emailService.send({
        to: student.email,
        subject: "Homework graded",
        html: homeworkGradedEmail(hw.title, dto.grade, dto.feedback),
      });
    }
    return toPublic(hw);
  }
}
