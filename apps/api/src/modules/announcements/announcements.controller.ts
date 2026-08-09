import { Body, Controller, Delete, Get, Param, Post } from "@nestjs/common";
import { Role } from "@tutor/shared";
import type { JwtPayload } from "@tutor/shared";
import { AnnouncementsService } from "./announcements.service";
import { UsersService } from "../users/users.service";
import { Roles } from "../../common/decorators/roles.decorator";
import { CurrentUser } from "../../common/decorators/current-user.decorator";
import { CreateAnnouncementDto } from "./dto/announcement.dto";

function toPublic(a: any) {
  const obj = a.toObject ? a.toObject() : a;
  return {
    id: String(obj._id),
    title: obj.title,
    message: obj.message,
    createdAt: obj.createdAt,
    author: obj.authorId && {
      id: String(obj.authorId._id ?? obj.authorId),
      name: obj.authorId.name,
    },
  };
}

@Controller("announcements")
export class AnnouncementsController {
  constructor(
    private announcementsService: AnnouncementsService,
    private usersService: UsersService,
  ) {}

  @Get()
  @Roles(Role.Teacher, Role.Student)
  async findAll(@CurrentUser() user: JwtPayload) {
    if (user.role === Role.Teacher) {
      return (await this.announcementsService.findForTeacher(user.sub)).map(toPublic);
    }
    const me = await this.usersService.findById(user.sub);
    if (!me?.assignedTeacherId) return [];
    return (await this.announcementsService.findForStudent(String(me.assignedTeacherId))).map(
      toPublic,
    );
  }

  @Post()
  @Roles(Role.Teacher)
  async create(@Body() dto: CreateAnnouncementDto, @CurrentUser() user: JwtPayload) {
    return toPublic(await this.announcementsService.create(dto, user.sub));
  }

  @Delete(":id")
  @Roles(Role.Teacher)
  async remove(@Param("id") id: string, @CurrentUser() user: JwtPayload) {
    await this.announcementsService.remove(id, user.sub);
    return { ok: true };
  }
}
