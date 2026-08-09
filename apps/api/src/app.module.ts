import { Module } from "@nestjs/common";
import { APP_GUARD } from "@nestjs/core";
import { ConfigModule } from "@nestjs/config";
import { EventEmitterModule } from "@nestjs/event-emitter";
import { ScheduleModule } from "@nestjs/schedule";
import configuration from "./config/configuration";
import { DatabaseModule } from "./database/database.module";
import { JwtAuthGuard } from "./common/guards/jwt-auth.guard";
import { RolesGuard } from "./common/guards/roles.guard";
import { AppController } from "./app.controller";
import { AuthModule } from "./modules/auth/auth.module";
import { UsersModule } from "./modules/users/users.module";
import { CoursesModule } from "./modules/courses/courses.module";
import { NotificationsModule } from "./modules/notifications/notifications.module";
import { UploadsModule } from "./modules/uploads/uploads.module";
import { DashboardModule } from "./modules/dashboard/dashboard.module";
import { ClassesModule } from "./modules/classes/classes.module";
import { ReportsModule } from "./modules/reports/reports.module";
import { HomeworkModule } from "./modules/homework/homework.module";
import { AnnouncementsModule } from "./modules/announcements/announcements.module";
import { CertificatesModule } from "./modules/certificates/certificates.module";
import { QuizzesModule } from "./modules/quizzes/quizzes.module";

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, load: [configuration] }),
    EventEmitterModule.forRoot(),
    ScheduleModule.forRoot(),
    DatabaseModule,
    UsersModule,
    AuthModule,
    CoursesModule,
    NotificationsModule,
    UploadsModule,
    DashboardModule,
    ClassesModule,
    ReportsModule,
    HomeworkModule,
    AnnouncementsModule,
    CertificatesModule,
    QuizzesModule,
  ],
  controllers: [AppController],
  providers: [
    { provide: APP_GUARD, useClass: JwtAuthGuard },
    { provide: APP_GUARD, useClass: RolesGuard },
  ],
})
export class AppModule {}
