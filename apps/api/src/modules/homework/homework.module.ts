import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { Homework, HomeworkSchema } from "./schemas/homework.schema";
import { HomeworkService } from "./homework.service";
import { HomeworkController } from "./homework.controller";
import { UsersModule } from "../users/users.module";
import { NotificationsModule } from "../notifications/notifications.module";

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Homework.name, schema: HomeworkSchema }]),
    UsersModule,
    NotificationsModule,
  ],
  controllers: [HomeworkController],
  providers: [HomeworkService],
  exports: [HomeworkService],
})
export class HomeworkModule {}
