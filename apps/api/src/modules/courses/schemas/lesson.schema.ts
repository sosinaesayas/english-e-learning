import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument, Schema as MongooseSchema, Types } from "mongoose";

export type LessonDocument = HydratedDocument<Lesson>;

@Schema({ _id: false })
class LessonResource {
  @Prop({ required: true })
  label: string;

  @Prop({ required: true })
  url: string;
}

@Schema({ timestamps: true })
export class Lesson {
  @Prop({ type: MongooseSchema.Types.ObjectId, ref: "CourseModule", required: true })
  moduleId: Types.ObjectId;

  @Prop({ required: true, trim: true })
  title: string;

  @Prop({ required: true, default: 0 })
  order: number;

  @Prop()
  slidesUrl?: string;

  @Prop({ type: [String], default: [] })
  pdfUrls: string[];

  @Prop({ type: [String], default: [] })
  videoUrls: string[];

  @Prop({ type: [LessonResource], default: [] })
  resources: LessonResource[];
}

export const LessonSchema = SchemaFactory.createForClass(Lesson);
