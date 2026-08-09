import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { ClassSchedule, ClassScheduleDocument } from "./schemas/class-schedule.schema";
import { CreateClassDto, UpdateClassDto, AttendanceRecordDto } from "./dto/class-schedule.dto";

export const POPULATE = [
  { path: "courseId", select: "title level" },
  { path: "teacherId", select: "name email" },
  { path: "studentIds", select: "name email" },
];

export type ClassStatus = "cancelled" | "live" | "upcoming" | "completed";

export function computeStatus(cls: { startsAt: Date; durationMinutes: number; cancelled: boolean }): ClassStatus {
  if (cls.cancelled) return "cancelled";
  const now = Date.now();
  const start = new Date(cls.startsAt).getTime();
  const end = start + cls.durationMinutes * 60_000;
  if (now < start) return "upcoming";
  if (now <= end) return "live";
  return "completed";
}

@Injectable()
export class ClassesService {
  constructor(
    @InjectModel(ClassSchedule.name) private classModel: Model<ClassScheduleDocument>,
  ) {}

  findAll(filter: { from?: Date; to?: Date; teacherId?: string; studentId?: string }) {
    const query: Record<string, unknown> = {};
    if (filter.from || filter.to) {
      query.startsAt = {
        ...(filter.from ? { $gte: filter.from } : {}),
        ...(filter.to ? { $lte: filter.to } : {}),
      };
    }
    if (filter.teacherId) query.teacherId = filter.teacherId;
    if (filter.studentId) query.studentIds = filter.studentId;

    return this.classModel.find(query).sort({ startsAt: 1 }).populate(POPULATE);
  }

  findToday(scope: { teacherId?: string; studentId?: string }) {
    const start = new Date();
    start.setHours(0, 0, 0, 0);
    const end = new Date();
    end.setHours(23, 59, 59, 999);
    return this.findAll({ from: start, to: end, ...scope });
  }

  findUpcoming(scope: { teacherId?: string; studentId?: string }) {
    return this.findAll({ from: new Date(), ...scope });
  }

  async findOne(id: string) {
    const cls = await this.classModel.findById(id).populate(POPULATE);
    if (!cls) throw new NotFoundException("Class not found");
    return cls;
  }

  create(dto: CreateClassDto) {
    return this.classModel.create(dto).then((doc) => doc.populate(POPULATE));
  }

  async update(id: string, dto: UpdateClassDto) {
    const cls = await this.classModel.findByIdAndUpdate(id, dto, { new: true }).populate(POPULATE);
    if (!cls) throw new NotFoundException("Class not found");
    return cls;
  }

  async remove(id: string) {
    await this.classModel.findByIdAndDelete(id);
  }

  countUpcomingToday(scope: { teacherId?: string; studentId?: string } = {}) {
    const start = new Date();
    start.setHours(0, 0, 0, 0);
    const end = new Date();
    end.setHours(23, 59, 59, 999);
    return this.classModel.countDocuments({
      startsAt: { $gte: start, $lte: end },
      cancelled: { $ne: true },
      ...(scope.teacherId ? { teacherId: scope.teacherId } : {}),
      ...(scope.studentId ? { studentIds: scope.studentId } : {}),
    });
  }

  countUpcoming(scope: { teacherId?: string; studentId?: string } = {}) {
    return this.classModel.countDocuments({
      startsAt: { $gte: new Date() },
      cancelled: { $ne: true },
      ...(scope.teacherId ? { teacherId: scope.teacherId } : {}),
      ...(scope.studentId ? { studentIds: scope.studentId } : {}),
    });
  }

  countByStatus() {
    return this.classModel.find({}, { startsAt: 1, durationMinutes: 1, cancelled: 1 });
  }

  attendanceRecords() {
    return this.classModel.find({}, { attendance: 1, studentIds: 1 });
  }

  async markAttendance(id: string, records: AttendanceRecordDto[], teacherId: string) {
    const cls = await this.classModel
      .findOneAndUpdate({ _id: id, teacherId }, { attendance: records }, { new: true })
      .populate(POPULATE);
    if (!cls) throw new NotFoundException("Class not found");
    return cls;
  }
}
