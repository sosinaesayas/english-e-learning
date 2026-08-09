import { Body, Controller, Delete, Get, Param, Post } from "@nestjs/common";
import { Role } from "@tutor/shared";
import type { JwtPayload } from "@tutor/shared";
import { QuizzesService } from "./quizzes.service";
import { UsersService } from "../users/users.service";
import { Roles } from "../../common/decorators/roles.decorator";
import { CurrentUser } from "../../common/decorators/current-user.decorator";
import { CreateQuizDto, AttemptQuizDto } from "./dto/quiz.dto";

function toPublic(quiz: any, viewerRole: Role, viewerId: string) {
  const obj = quiz.toObject ? quiz.toObject() : quiz;
  const course = obj.courseId && {
    id: String(obj.courseId._id ?? obj.courseId),
    title: obj.courseId.title,
    level: obj.courseId.level,
  };

  if (viewerRole === Role.Teacher || viewerRole === Role.Admin) {
    return {
      id: String(obj._id),
      course,
      teacherId: String(obj.teacherId),
      title: obj.title,
      questions: obj.questions.map((q: any) => ({
        text: q.text,
        options: q.options,
        correctIndex: q.correctIndex,
      })),
      attempts: obj.attempts.map((a: any) => ({
        studentId: String(a.studentId),
        answers: a.answers,
        score: a.score,
        submittedAt: a.submittedAt,
      })),
    };
  }

  // Student view: hide correctIndex until they've attempted; only show their own attempt.
  const myAttempt = obj.attempts.find((a: any) => String(a.studentId) === viewerId);
  return {
    id: String(obj._id),
    course,
    teacherId: String(obj.teacherId),
    title: obj.title,
    questions: obj.questions.map((q: any) => ({
      text: q.text,
      options: q.options,
      ...(myAttempt ? { correctIndex: q.correctIndex } : {}),
    })),
    attempts: [],
    myAttempt: myAttempt
      ? {
          studentId: String(myAttempt.studentId),
          answers: myAttempt.answers,
          score: myAttempt.score,
          submittedAt: myAttempt.submittedAt,
        }
      : null,
  };
}

@Controller("quizzes")
export class QuizzesController {
  constructor(
    private quizzesService: QuizzesService,
    private usersService: UsersService,
  ) {}

  @Get()
  @Roles(Role.Teacher, Role.Student)
  async findAll(@CurrentUser() user: JwtPayload) {
    if (user.role === Role.Teacher) {
      const quizzes = await this.quizzesService.findForTeacher(user.sub);
      return quizzes.map((q) => toPublic(q, user.role, user.sub));
    }
    const me = await this.usersService.findById(user.sub);
    if (!me?.courseId) return [];
    const quizzes = await this.quizzesService.findForCourse(String(me.courseId));
    return quizzes.map((q) => toPublic(q, user.role, user.sub));
  }

  @Post()
  @Roles(Role.Teacher)
  async create(@Body() dto: CreateQuizDto, @CurrentUser() user: JwtPayload) {
    const quiz = await this.quizzesService.create(dto, user.sub);
    return toPublic(quiz, user.role, user.sub);
  }

  @Delete(":id")
  @Roles(Role.Teacher)
  async remove(@Param("id") id: string, @CurrentUser() user: JwtPayload) {
    await this.quizzesService.remove(id, user.sub);
    return { ok: true };
  }

  @Post(":id/attempt")
  @Roles(Role.Student)
  async attempt(
    @Param("id") id: string,
    @Body() dto: AttemptQuizDto,
    @CurrentUser() user: JwtPayload,
  ) {
    const quiz = await this.quizzesService.attempt(id, user.sub, dto);
    return toPublic(quiz, user.role, user.sub);
  }
}
