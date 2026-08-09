import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model, Types } from "mongoose";
import { Role, UserStatus } from "@tutor/shared";
import { User, UserDocument } from "./schemas/user.schema";
import {
  PasswordResetToken,
  PasswordResetTokenDocument,
} from "./schemas/password-reset-token.schema";

export interface CreateUserInput {
  name: string;
  email: string;
  passwordHash: string;
  role: Role;
  phone?: string;
  mustResetPassword?: boolean;
}

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name) private userModel: Model<UserDocument>,
    @InjectModel(PasswordResetToken.name)
    private resetTokenModel: Model<PasswordResetTokenDocument>,
  ) {}

  findByEmail(email: string) {
    return this.userModel.findOne({ email: email.toLowerCase().trim() });
  }

  findById(id: string) {
    return this.userModel.findById(id);
  }

  findByRole(role: Role, search?: string) {
    const filter: Record<string, unknown> = { role };
    if (search) {
      filter.$or = [
        { name: { $regex: search, $options: "i" } },
        { email: { $regex: search, $options: "i" } },
      ];
    }
    return this.userModel.find(filter).sort({ createdAt: -1 });
  }

  countByRole(role: Role) {
    return this.userModel.countDocuments({ role });
  }

  recentRegistrations(limit = 5) {
    return this.userModel.find().sort({ createdAt: -1 }).limit(limit);
  }

  studentsForTeacher(teacherId: string) {
    return this.userModel.find({ role: Role.Student, assignedTeacherId: teacherId });
  }

  countStudentsForTeacher(teacherId: string) {
    return this.userModel.countDocuments({ role: Role.Student, assignedTeacherId: teacherId });
  }

  async create(input: CreateUserInput) {
    return this.userModel.create({
      name: input.name,
      email: input.email.toLowerCase().trim(),
      passwordHash: input.passwordHash,
      role: input.role,
      phone: input.phone,
      status: UserStatus.Active,
      mustResetPassword: input.mustResetPassword ?? false,
    });
  }

  async updatePassword(userId: Types.ObjectId | string, passwordHash: string) {
    await this.userModel.findByIdAndUpdate(userId, {
      passwordHash,
      mustResetPassword: false,
      $inc: { tokenVersion: 1 },
    });
  }

  async createResetToken(userId: Types.ObjectId, tokenHash: string, expiresAt: Date) {
    await this.resetTokenModel.deleteMany({ userId });
    return this.resetTokenModel.create({ userId, tokenHash, expiresAt });
  }

  async findValidResetToken(tokenHash: string) {
    return this.resetTokenModel.findOne({
      tokenHash,
      expiresAt: { $gt: new Date() },
    });
  }

  async deleteResetToken(id: Types.ObjectId | string) {
    await this.resetTokenModel.findByIdAndDelete(id);
  }

  async update(id: string, changes: Partial<Pick<User, "name" | "phone" | "status">>) {
    return this.userModel.findByIdAndUpdate(id, changes, { new: true });
  }

  async assignTeacher(studentId: string, teacherId: string) {
    return this.userModel.findByIdAndUpdate(
      studentId,
      { assignedTeacherId: teacherId },
      { new: true },
    );
  }

  async assignCourse(studentId: string, courseId: string) {
    return this.userModel.findByIdAndUpdate(studentId, { courseId }, { new: true });
  }

  async remove(id: string) {
    await this.userModel.findByIdAndDelete(id);
    await this.resetTokenModel.deleteMany({ userId: id });
    // Clear the assignment so no student is left pointing at a deleted teacher.
    await this.userModel.updateMany({ assignedTeacherId: id }, { $unset: { assignedTeacherId: 1 } });
  }

  async toggleLessonComplete(userId: string, lessonId: string, completed: boolean) {
    const update = completed
      ? { $addToSet: { completedLessonIds: lessonId } }
      : { $pull: { completedLessonIds: lessonId } };
    return this.userModel.findByIdAndUpdate(userId, update, { new: true });
  }

  studentsGroupedByCourse(): Promise<{ _id: Types.ObjectId; count: number }[]> {
    return this.userModel.aggregate([
      { $match: { role: Role.Student, courseId: { $exists: true, $ne: null } } },
      { $group: { _id: "$courseId", count: { $sum: 1 } } },
    ]);
  }

  studentsGroupedByTeacher(): Promise<{ _id: Types.ObjectId; count: number }[]> {
    return this.userModel.aggregate([
      { $match: { role: Role.Student, assignedTeacherId: { $exists: true, $ne: null } } },
      { $group: { _id: "$assignedTeacherId", count: { $sum: 1 } } },
    ]);
  }
}
