import { Controller, Get } from "@nestjs/common";
import { Role } from "@tutor/shared";
import { Roles } from "../../common/decorators/roles.decorator";
import { ReportsService } from "./reports.service";

@Controller("reports")
@Roles(Role.Admin)
export class ReportsController {
  constructor(private reportsService: ReportsService) {}

  @Get("enrollment")
  enrollment() {
    return this.reportsService.enrollmentByCourse();
  }

  @Get("teachers")
  teachers() {
    return this.reportsService.teacherWorkload();
  }

  @Get("classes")
  classes() {
    return this.reportsService.classStats();
  }

  @Get("attendance")
  attendance() {
    return this.reportsService.attendanceSummary();
  }

  @Get("quizzes")
  quizzes() {
    return this.reportsService.quizReport();
  }
}
