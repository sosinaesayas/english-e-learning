import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument, Schema as MongooseSchema, Types } from "mongoose";
import { Role, UserStatus } from "@tutor/shared";

export type UserDocument = HydratedDocument<User>;

@Schema({ timestamps: true })
export class User {
  @Prop({ required: true, trim: true })
  name: string;

  @Prop({ required: true, unique: true, lowercase: true, trim: true })
  email: string;

  @Prop({ required: true })
  passwordHash: string;

  @Prop({ type: String, required: true, enum: Role })
  role: Role;

  @Prop()
  phone?: string;

  @Prop()
  avatarUrl?: string;

  @Prop({ type: String, required: true, enum: UserStatus, default: UserStatus.Active })
  status: UserStatus;

  @Prop({ default: false })
  mustResetPassword: boolean;

  @Prop({ default: 0 })
  tokenVersion: number;

  @Prop({ type: MongooseSchema.Types.ObjectId, ref: "User" })
  assignedTeacherId?: Types.ObjectId;

  @Prop({ type: MongooseSchema.Types.ObjectId, ref: "Course" })
  courseId?: Types.ObjectId;

  @Prop({ type: [MongooseSchema.Types.ObjectId], ref: "Lesson", default: [] })
  completedLessonIds: Types.ObjectId[];

  createdAt?: Date;
  updatedAt?: Date;
}

export const UserSchema = SchemaFactory.createForClass(User);
