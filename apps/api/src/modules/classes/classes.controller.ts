import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from "@nestjs/common";
import { Role } from "@tutor/shared";
import type { JwtPayload } from "@tutor/shared";
import { ClassesService, computeStatus } from "./classes.service";
import { EmailService } from "../notifications/email.service";
import { classScheduledEmail } from "../notifications/email-templates";
import { Roles } from "../../common/decorators/roles.decorator";
import { CurrentUser } from "../../common/decorators/current-user.decorator";
import { CreateClassDto, UpdateClassDto, MarkAttendanceDto } from "./dto/class-schedule.dto";

function toPublic(cls: any) {
  const obj = cls.toObject ? cls.toObject() : cls;
  return {
    id: String(obj._id),
    course: obj.courseId && {
      id: String(obj.courseId._id ?? obj.courseId),
      title: obj.courseId.title,
      level: obj.courseId.level,
    },
    teacher: obj.teacherId && {
      id: String(obj.teacherId._id ?? obj.teacherId),
      name: obj.teacherId.name,
      email: obj.teacherId.email,
    },
    students: (obj.studentIds ?? []).map((s: any) => ({
      id: String(s._id ?? s),
      name: s.name,
      email: s.email,
    })),
    startsAt: obj.startsAt,
    durationMinutes: obj.durationMinutes,
    meetLink: obj.meetLink,
    cancelled: obj.cancelled,
    status: computeStatus(obj),
    attendance: (obj.attendance ?? []).map((a: any) => ({
      studentId: String(a.studentId),
      status: a.status,
    })),
  };
}

function formatDateLabel(date: Date) {
  return new Intl.DateTimeFormat("en-US", { weekday: "short", month: "short", day: "numeric" }).format(date);
}

function formatTimeLabel(date: Date) {
  return new Intl.DateTimeFormat("en-US", { hour: "numeric", minute: "2-digit" }).format(date);
}

/** Scope list queries to the caller's own classes unless they're an admin. */
function scopeFor(user: JwtPayload, requested: { teacherId?: string; studentId?: string }) {
  if (user.role === Role.Teacher) return { teacherId: user.sub };
  if (user.role === Role.Student) return { studentId: user.sub };
  return requested;
}

@Controller("schedule")
export class ClassesController {
  constructor(
    private classesService: ClassesService,
    private emailService: EmailService,
  ) {}

  @Get()
  async findAll(
    @CurrentUser() user: JwtPayload,
    @Query("from") from?: string,
    @Query("to") to?: string,
    @Query("teacherId") teacherId?: string,
    @Query("studentId") studentId?: string,
  ) {
    const scope = scopeFor(user, { teacherId, studentId });
    const classes = await this.classesService.findAll({
      from: from ? new Date(from) : undefined,
      to: to ? new Date(to) : undefined,
      ...scope,
    });
    return classes.map(toPublic);
  }

  @Get("today")
  async today(@CurrentUser() user: JwtPayload) {
    const scope = scopeFor(user, {});
    const classes = await this.classesService.findToday(scope);
    return classes.map(toPublic);
  }

  @Get("upcoming")
  async upcoming(@CurrentUser() user: JwtPayload) {
    const scope = scopeFor(user, {});
    const classes = await this.classesService.findUpcoming(scope);
    return classes.map(toPublic);
  }

  @Get(":id")
  async findOne(@Param("id") id: string) {
    return toPublic(await this.classesService.findOne(id));
  }

  @Post()
  @Roles(Role.Admin)
  async create(@Body() dto: CreateClassDto) {
    const cls = await this.classesService.create(dto);
    const obj = cls.toObject();
    const dateLabel = formatDateLabel(obj.startsAt);
    const timeLabel = formatTimeLabel(obj.startsAt);
    const courseTitle = (obj.courseId as any)?.title ?? "your class";
    const recipients = [obj.teacherId, ...obj.studentIds].filter(Boolean) as any[];
    for (const recipient of recipients) {
      if (!recipient?.email) continue;
      await this.emailService.send({
        to: recipient.email,
        subject: "New class scheduled",
        html: classScheduledEmail(courseTitle, dateLabel, timeLabel, obj.meetLink),
      });
    }
    return toPublic(cls);
  }

  @Patch(":id")
  @Roles(Role.Admin)
  async update(@Param("id") id: string, @Body() dto: UpdateClassDto) {
    return toPublic(await this.classesService.update(id, dto));
  }

  @Delete(":id")
  @Roles(Role.Admin)
  async remove(@Param("id") id: string) {
    await this.classesService.remove(id);
    return { ok: true };
  }

  @Patch(":id/attendance")
  @Roles(Role.Teacher)
  async markAttendance(
    @Param("id") id: string,
    @Body() dto: MarkAttendanceDto,
    @CurrentUser() user: JwtPayload,
  ) {
    return toPublic(await this.classesService.markAttendance(id, dto.records, user.sub));
  }
}
