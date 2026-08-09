import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument, Schema as MongooseSchema, Types } from "mongoose";

@Schema({ _id: false })
export class Submission {
  @Prop({ type: MongooseSchema.Types.ObjectId, ref: "User", required: true })
  studentId: Types.ObjectId;

  @Prop({ required: true })
  text: string;

  @Prop({ required: true, default: Date.now })
  submittedAt: Date;

  @Prop()
  grade?: number;

  @Prop()
  feedback?: string;
}

export const SubmissionSchema = SchemaFactory.createForClass(Submission);

export type HomeworkDocument = HydratedDocument<Homework>;

@Schema({ timestamps: true })
export class Homework {
  @Prop({ type: MongooseSchema.Types.ObjectId, ref: "User", required: true })
  teacherId: Types.ObjectId;

  @Prop({ type: MongooseSchema.Types.ObjectId, ref: "Course", required: true })
  courseId: Types.ObjectId;

  @Prop({ required: true, trim: true })
  title: string;

  @Prop({ default: "" })
  description: string;

  @Prop({ required: true })
  dueDate: Date;

  @Prop({ type: [MongooseSchema.Types.ObjectId], ref: "User", required: true, default: [] })
  studentIds: Types.ObjectId[];

  @Prop({ type: [SubmissionSchema], default: [] })
  submissions: Submission[];
}

export const HomeworkSchema = SchemaFactory.createForClass(Homework);
HomeworkSchema.index({ teacherId: 1 });
HomeworkSchema.index({ studentIds: 1 });
