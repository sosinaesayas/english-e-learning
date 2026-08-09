import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { Course, CourseSchema } from "./schemas/course.schema";
import { CourseModule as CourseModuleEntity, ModuleSchema } from "./schemas/module.schema";
import { Lesson, LessonSchema } from "./schemas/lesson.schema";
import { CoursesService } from "./courses.service";
import { CoursesController } from "./courses.controller";
import { ModulesController } from "./modules.controller";
import { LessonsController } from "./lessons.controller";
import { UsersModule } from "../users/users.module";
import { CertificatesModule } from "../certificates/certificates.module";
import { NotificationsModule } from "../notifications/notifications.module";

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Course.name, schema: CourseSchema },
      { name: CourseModuleEntity.name, schema: ModuleSchema },
      { name: Lesson.name, schema: LessonSchema },
    ]),
    UsersModule,
    CertificatesModule,
    NotificationsModule,
  ],
  controllers: [CoursesController, ModulesController, LessonsController],
  providers: [CoursesService],
  exports: [MongooseModule, CoursesService],
})
export class CoursesModule {}
