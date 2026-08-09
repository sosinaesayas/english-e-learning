import { ForbiddenException, Injectable, NotFoundException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model, Types } from "mongoose";
import { Role } from "@tutor/shared";
import { Homework, HomeworkDocument } from "./schemas/homework.schema";
import { User, UserDocument } from "../users/schemas/user.schema";
import { CreateHomeworkDto, GradeHomeworkDto, SubmitHomeworkDto, UpdateHomeworkDto } from "./dto/homework.dto";

const POPULATE = [
  { path: "courseId", select: "title level" },
  { path: "studentIds", select: "name email" },
];

@Injectable()
export class HomeworkService {
  constructor(
    @InjectModel(Homework.name) private homeworkModel: Model<HomeworkDocument>,
    @InjectModel(User.name) private userModel: Model<UserDocument>,
  ) {}

  findAll(scope: { teacherId?: string; studentId?: string }) {
    const query: Record<string, unknown> = {};
    if (scope.teacherId) query.teacherId = scope.teacherId;
    if (scope.studentId) query.studentIds = scope.studentId;
    return this.homeworkModel.find(query).sort({ dueDate: 1 }).populate(POPULATE);
  }

  async findOne(id: string) {
    const hw = await this.homeworkModel.findById(id).populate(POPULATE);
    if (!hw) throw new NotFoundException("Homework not found");
    return hw;
  }

  async create(dto: CreateHomeworkDto, teacherId: string) {
    const ownedCount = await this.userModel.countDocuments({
      _id: { $in: dto.studentIds },
      role: Role.Student,
      assignedTeacherId: teacherId,
    });
    if (ownedCount !== dto.studentIds.length) {
      throw new ForbiddenException("You can only assign homework to your own students");
    }
    const hw = await this.homeworkModel.create({ ...dto, teacherId });
    return hw.populate(POPULATE);
  }

  async update(id: string, dto: UpdateHomeworkDto, teacherId: string) {
    const hw = await this.homeworkModel
      .findOneAndUpdate({ _id: id, teacherId }, dto, { new: true })
      .populate(POPULATE);
    if (!hw) throw new NotFoundException("Homework not found");
    return hw;
  }

  async remove(id: string, teacherId: string) {
    const res = await this.homeworkModel.deleteOne({ _id: id, teacherId });
    if (res.deletedCount === 0) throw new NotFoundException("Homework not found");
  }

  async submit(id: string, studentId: string, dto: SubmitHomeworkDto) {
    const updateResult = await this.homeworkModel.updateOne(
      { _id: id, "submissions.studentId": studentId },
      { $set: { "submissions.$.text": dto.text, "submissions.$.submittedAt": new Date() } },
    );
    if (updateResult.matchedCount === 0) {
      const hw = await this.homeworkModel.findOne({ _id: id, studentIds: studentId });
      if (!hw) throw new NotFoundException("Homework not found");
      await this.homeworkModel.updateOne(
        { _id: id },
        { $push: { submissions: { studentId, text: dto.text, submittedAt: new Date() } } },
      );
    }
    return this.findOne(id);
  }

  async grade(id: string, studentId: string, dto: GradeHomeworkDto, teacherId: string) {
    const res = await this.homeworkModel.updateOne(
      { _id: id, teacherId, "submissions.studentId": studentId },
      { $set: { "submissions.$.grade": dto.grade, "submissions.$.feedback": dto.feedback } },
    );
    if (res.matchedCount === 0) throw new NotFoundException("Submission not found");
    return this.findOne(id);
  }

  countAwaitingGrading(teacherId: string) {
    return this.homeworkModel
      .aggregate([
        { $match: { teacherId: new Types.ObjectId(teacherId) } },
        { $unwind: "$submissions" },
        { $match: { "submissions.grade": { $exists: false } } },
        { $count: "count" },
      ])
      .then((res) => res[0]?.count ?? 0);
  }

  countPendingForStudent(studentId: string) {
    return this.homeworkModel.countDocuments({
      studentIds: studentId,
      submissions: { $not: { $elemMatch: { studentId } } },
    });
  }
}
