import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Patch,
  Post,
  Query,
} from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import * as bcrypt from "bcryptjs";
import { randomBytes, createHash } from "crypto";
import { Role } from "@tutor/shared";
import type { JwtPayload } from "@tutor/shared";
import { UsersService } from "./users.service";
import { EmailService } from "../notifications/email.service";
import { welcomeEmail, teacherAssignedEmail } from "../notifications/email-templates";
import { Roles } from "../../common/decorators/roles.decorator";
import { CurrentUser } from "../../common/decorators/current-user.decorator";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { AssignTeacherDto, AssignCourseDto } from "./dto/assign.dto";

function toPublicUser(user: {
  _id: unknown;
  name: string;
  email: string;
  role: Role;
  phone?: string;
  status: string;
  assignedTeacherId?: unknown;
  courseId?: unknown;
  createdAt?: Date;
}) {
  return {
    id: String(user._id),
    name: user.name,
    email: user.email,
    role: user.role,
    phone: user.phone,
    status: user.status,
    assignedTeacherId: user.assignedTeacherId ? String(user.assignedTeacherId) : null,
    courseId: user.courseId ? String(user.courseId) : null,
    createdAt: user.createdAt,
  };
}

@Controller("users")
@Roles(Role.Admin)
export class UsersController {
  constructor(
    private usersService: UsersService,
    private emailService: EmailService,
    private config: ConfigService,
  ) {}

  @Get()
  async list(@Query("role") role: Role, @Query("search") search?: string) {
    const users = await this.usersService.findByRole(role, search);
    return users.map(toPublicUser);
  }

  @Get(":id")
  async getOne(@Param("id") id: string) {
    const user = await this.usersService.findById(id);
    if (!user) throw new NotFoundException("User not found");
    return toPublicUser(user);
  }

  @Post()
  async create(@Body() dto: CreateUserDto) {
    const existing = await this.usersService.findByEmail(dto.email);
    if (existing) {
      throw new NotFoundException("A user with this email already exists");
    }

    const tempPassword = randomBytes(6).toString("hex");
    const passwordHash = await bcrypt.hash(tempPassword, 10);
    const user = await this.usersService.create({
      name: dto.name,
      email: dto.email,
      phone: dto.phone,
      role: dto.role,
      passwordHash,
      mustResetPassword: true,
    });

    const rawToken = randomBytes(32).toString("hex");
    const tokenHash = createHash("sha256").update(rawToken).digest("hex");
    await this.usersService.createResetToken(
      user._id,
      tokenHash,
      new Date(Date.now() + 60 * 60 * 1000),
    );
    const resetUrl = `${this.config.get<string>("webUrl")}/reset-password?token=${rawToken}`;

    await this.emailService.send({
      to: user.email,
      subject: "Welcome to English Academy",
      html: welcomeEmail(user.name, user.email, tempPassword, resetUrl),
    });

    return toPublicUser(user);
  }

  @Patch(":id")
  async update(@Param("id") id: string, @Body() dto: UpdateUserDto) {
    const user = await this.usersService.update(id, dto);
    if (!user) throw new NotFoundException("User not found");
    return toPublicUser(user);
  }

  @Post(":id/assign-teacher")
  async assignTeacher(@Param("id") id: string, @Body() dto: AssignTeacherDto) {
    const [student, teacher] = await Promise.all([
      this.usersService.assignTeacher(id, dto.teacherId),
      this.usersService.findById(dto.teacherId),
    ]);
    if (!student) throw new NotFoundException("Student not found");
    if (teacher) {
      await this.emailService.send({
        to: student.email,
        subject: "Teacher assigned",
        html: teacherAssignedEmail(student.name, teacher.name),
      });
    }
    return toPublicUser(student);
  }

  @Post(":id/assign-course")
  async assignCourse(@Param("id") id: string, @Body() dto: AssignCourseDto) {
    const student = await this.usersService.assignCourse(id, dto.courseId);
    if (!student) throw new NotFoundException("Student not found");
    return toPublicUser(student);
  }

  @Get("me/students")
  @Roles(Role.Teacher)
  async myStudents(@CurrentUser() user: JwtPayload) {
    const students = await this.usersService.studentsForTeacher(user.sub);
    return students.map(toPublicUser);
  }

  @Get(":id/students")
  async studentsForTeacher(@Param("id") id: string) {
    const students = await this.usersService.studentsForTeacher(id);
    return students.map(toPublicUser);
  }

  @Delete(":id")
  async remove(@Param("id") id: string) {
    const user = await this.usersService.findById(id);
    if (!user) throw new NotFoundException("User not found");
    await this.usersService.remove(id);
    return { ok: true };
  }
}
