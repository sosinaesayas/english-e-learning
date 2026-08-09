import { Body, Controller, Delete, Param, Patch, Post } from "@nestjs/common";
import { Role } from "@tutor/shared";
import { CoursesService } from "./courses.service";
import { Roles } from "../../common/decorators/roles.decorator";
import { UpdateModuleDto } from "./dto/module.dto";
import { CreateLessonDto } from "./dto/lesson.dto";

@Controller("modules")
@Roles(Role.Admin)
export class ModulesController {
  constructor(private coursesService: CoursesService) {}

  @Patch(":id")
  update(@Param("id") id: string, @Body() dto: UpdateModuleDto) {
    return this.coursesService.updateModule(id, dto);
  }

  @Delete(":id")
  async remove(@Param("id") id: string) {
    await this.coursesService.removeModule(id);
    return { ok: true };
  }

  @Post(":id/lessons")
  createLesson(@Param("id") id: string, @Body() dto: CreateLessonDto) {
    return this.coursesService.createLesson(id, dto);
  }
}
