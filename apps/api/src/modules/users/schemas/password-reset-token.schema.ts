import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument, Schema as MongooseSchema, Types } from "mongoose";

export type PasswordResetTokenDocument = HydratedDocument<PasswordResetToken>;

@Schema({ timestamps: true })
export class PasswordResetToken {
  @Prop({ type: MongooseSchema.Types.ObjectId, ref: "User", required: true })
  userId: Types.ObjectId;

  @Prop({ required: true, unique: true })
  tokenHash: string;

  @Prop({ required: true })
  expiresAt: Date;
}

export const PasswordResetTokenSchema = SchemaFactory.createForClass(PasswordResetToken);
PasswordResetTokenSchema.index({ expiresAt: 1 }, { expireAfterSeconds: 0 });
