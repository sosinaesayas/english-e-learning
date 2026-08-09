import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument, Schema as MongooseSchema, Types } from "mongoose";

@Schema({ _id: false })
export class QuizQuestion {
  @Prop({ required: true, trim: true })
  text: string;

  @Prop({ type: [String], required: true })
  options: string[];

  @Prop({ required: true })
  correctIndex: number;
}

export const QuizQuestionSchema = SchemaFactory.createForClass(QuizQuestion);

@Schema({ _id: false })
export class QuizAttempt {
  @Prop({ type: MongooseSchema.Types.ObjectId, ref: "User", required: true })
  studentId: Types.ObjectId;

  @Prop({ type: [Number], required: true })
  answers: number[];

  @Prop({ required: true })
  score: number;

  @Prop({ required: true, default: Date.now })
  submittedAt: Date;
}

export const QuizAttemptSchema = SchemaFactory.createForClass(QuizAttempt);

export type QuizDocument = HydratedDocument<Quiz>;

@Schema({ timestamps: true })
export class Quiz {
  @Prop({ type: MongooseSchema.Types.ObjectId, ref: "User", required: true })
  teacherId: Types.ObjectId;

  @Prop({ type: MongooseSchema.Types.ObjectId, ref: "Course", required: true })
  courseId: Types.ObjectId;

  @Prop({ required: true, trim: true })
  title: string;

  @Prop({ type: [QuizQuestionSchema], required: true })
  questions: QuizQuestion[];

  @Prop({ type: [QuizAttemptSchema], default: [] })
  attempts: QuizAttempt[];
}

export const QuizSchema = SchemaFactory.createForClass(Quiz);
QuizSchema.index({ teacherId: 1 });
QuizSchema.index({ courseId: 1 });
