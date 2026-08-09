import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument, Schema as MongooseSchema, Types } from "mongoose";
import { AttendanceStatus } from "@tutor/shared";

@Schema({ _id: false })
export class AttendanceRecord {
  @Prop({ type: MongooseSchema.Types.ObjectId, ref: "User", required: true })
  studentId: Types.ObjectId;

  @Prop({ type: String, required: true, enum: AttendanceStatus })
  status: AttendanceStatus;
}

export const AttendanceRecordSchema = SchemaFactory.createForClass(AttendanceRecord);

export type ClassScheduleDocument = HydratedDocument<ClassSchedule>;

@Schema({ timestamps: true })
export class ClassSchedule {
  @Prop({ type: MongooseSchema.Types.ObjectId, ref: "Course", required: true })
  courseId: Types.ObjectId;

  @Prop({ type: MongooseSchema.Types.ObjectId, ref: "User", required: true })
  teacherId: Types.ObjectId;

  @Prop({ type: [MongooseSchema.Types.ObjectId], ref: "User", required: true, default: [] })
  studentIds: Types.ObjectId[];

  @Prop({ required: true })
  startsAt: Date;

  @Prop({ required: true, default: 45 })
  durationMinutes: number;

  @Prop({ required: true })
  meetLink: string;

  @Prop({ default: false })
  cancelled: boolean;

  @Prop({ type: [AttendanceRecordSchema], default: [] })
  attendance: AttendanceRecord[];

  @Prop({ default: false })
  reminded24h: boolean;

  @Prop({ default: false })
  reminded1h: boolean;
}

export const ClassScheduleSchema = SchemaFactory.createForClass(ClassSchedule);
ClassScheduleSchema.index({ startsAt: 1 });
