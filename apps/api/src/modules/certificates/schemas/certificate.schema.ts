import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument, Schema as MongooseSchema, Types } from "mongoose";

export type CertificateDocument = HydratedDocument<Certificate>;

@Schema({ timestamps: false })
export class Certificate {
  @Prop({ type: MongooseSchema.Types.ObjectId, ref: "User", required: true })
  studentId: Types.ObjectId;

  @Prop({ type: MongooseSchema.Types.ObjectId, ref: "Course", required: true })
  courseId: Types.ObjectId;

  @Prop({ type: MongooseSchema.Types.ObjectId, ref: "User", required: true })
  teacherId: Types.ObjectId;

  @Prop({ required: true, unique: true })
  certificateNumber: string;

  @Prop({ required: true, default: Date.now })
  issuedAt: Date;
}

export const CertificateSchema = SchemaFactory.createForClass(Certificate);
