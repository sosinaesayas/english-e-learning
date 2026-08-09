import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument, Schema as MongooseSchema, Types } from "mongoose";

export type ModuleDocument = HydratedDocument<CourseModule>;

@Schema({ timestamps: true, collection: "modules" })
export class CourseModule {
  @Prop({ type: MongooseSchema.Types.ObjectId, ref: "Course", required: true })
  courseId: Types.ObjectId;

  @Prop({ required: true, trim: true })
  title: string;

  @Prop({ required: true, default: 0 })
  order: number;
}

export const ModuleSchema = SchemaFactory.createForClass(CourseModule);
