import { Module } from "@nestjs/common";
import { DashboardController } from "./dashboard.controller";
import { UsersModule } from "../users/users.module";
import { CoursesModule } from "../courses/courses.module";
import { ClassesModule } from "../classes/classes.module";
import { HomeworkModule } from "../homework/homework.module";
import { AnnouncementsModule } from "../announcements/announcements.module";

@Module({
  imports: [UsersModule, CoursesModule, ClassesModule, HomeworkModule, AnnouncementsModule],
  controllers: [DashboardController],
})
export class DashboardModule {}
