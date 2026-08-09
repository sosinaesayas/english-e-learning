import { Body, Controller, Delete, Param, Patch } from "@nestjs/common";
import { Role } from "@tutor/shared";
import { CoursesService } from "./courses.service";
import { Roles } from "../../common/decorators/roles.decorator";
import { UpdateLessonDto } from "./dto/lesson.dto";

@Controller("lessons")
@Roles(Role.Admin, Role.Teacher)
export class LessonsController {
  constructor(private coursesService: CoursesService) {}

  @Patch(":id")
  update(@Param("id") id: string, @Body() dto: UpdateLessonDto) {
    return this.coursesService.updateLesson(id, dto);
  }

  @Delete(":id")
  @Roles(Role.Admin)
  async remove(@Param("id") id: string) {
    await this.coursesService.removeLesson(id);
    return { ok: true };
  }
}
