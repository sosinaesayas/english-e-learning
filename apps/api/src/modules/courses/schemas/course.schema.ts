import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument, Schema as MongooseSchema, Types } from "mongoose";

export type CourseDocument = HydratedDocument<Course>;

@Schema({ timestamps: true })
export class Course {
  @Prop({ required: true, trim: true })
  title: string;

  @Prop({ required: true, min: 1, max: 4 })
  level: number;

  @Prop({ default: "" })
  description: string;

  @Prop()
  thumbnailUrl?: string;

  @Prop({ default: true })
  isPublished: boolean;

  @Prop({ type: MongooseSchema.Types.ObjectId, ref: "User" })
  createdBy?: Types.ObjectId;
}

export const CourseSchema = SchemaFactory.createForClass(Course);
