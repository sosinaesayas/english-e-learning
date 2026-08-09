import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument, Schema as MongooseSchema, Types } from "mongoose";

export type AnnouncementDocument = HydratedDocument<Announcement>;

@Schema({ timestamps: true })
export class Announcement {
  @Prop({ type: MongooseSchema.Types.ObjectId, ref: "User", required: true })
  authorId: Types.ObjectId;

  @Prop({ required: true, trim: true })
  title: string;

  @Prop({ required: true })
  message: string;

  createdAt?: Date;
}

export const AnnouncementSchema = SchemaFactory.createForClass(Announcement);
AnnouncementSchema.index({ authorId: 1, createdAt: -1 });
