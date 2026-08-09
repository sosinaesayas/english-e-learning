import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { ClassSchedule, ClassScheduleSchema } from "./schemas/class-schedule.schema";
import { ClassesService } from "./classes.service";
import { ClassesController } from "./classes.controller";
import { ClassRemindersService } from "./class-reminders.service";
import { NotificationsModule } from "../notifications/notifications.module";

@Module({
  imports: [
    MongooseModule.forFeature([{ name: ClassSchedule.name, schema: ClassScheduleSchema }]),
    NotificationsModule,
  ],
  controllers: [ClassesController],
  providers: [ClassesService, ClassRemindersService],
  exports: [ClassesService],
})
export class ClassesModule {}
