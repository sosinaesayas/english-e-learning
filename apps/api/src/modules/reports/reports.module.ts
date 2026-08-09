import { Module } from "@nestjs/common";
import { ReportsController } from "./reports.controller";
import { ReportsService } from "./reports.service";
import { UsersModule } from "../users/users.module";
import { CoursesModule } from "../courses/courses.module";
import { ClassesModule } from "../classes/classes.module";
import { QuizzesModule } from "../quizzes/quizzes.module";

@Module({
  imports: [UsersModule, CoursesModule, ClassesModule, QuizzesModule],
  controllers: [ReportsController],
  providers: [ReportsService],
})
export class ReportsModule {}
