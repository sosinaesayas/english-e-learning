import { BadRequestException, ForbiddenException, Injectable, NotFoundException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { randomBytes } from "crypto";
import { Certificate, CertificateDocument } from "./schemas/certificate.schema";
import { UsersService } from "../users/users.service";

const POPULATE = [
  { path: "courseId", select: "title level" },
  { path: "teacherId", select: "name" },
];

@Injectable()
export class CertificatesService {
  constructor(
    @InjectModel(Certificate.name) private certificateModel: Model<CertificateDocument>,
    private usersService: UsersService,
  ) {}

  async issue(studentId: string, teacherId: string) {
    const student = await this.usersService.findById(studentId);
    if (!student) throw new NotFoundException("Student not found");
    if (String(student.assignedTeacherId) !== teacherId) {
      throw new ForbiddenException("Not your student");
    }
    if (!student.courseId) {
      throw new BadRequestException("Student has no course assigned");
    }

    const existing = await this.certificateModel.findOne({
      studentId,
      courseId: student.courseId,
    });
    if (existing) {
      return { cert: await existing.populate(POPULATE), student, alreadyIssued: true };
    }

    const certificateNumber = `CERT-${new Date().getFullYear()}-${randomBytes(4).toString("hex").toUpperCase()}`;
    const cert = await this.certificateModel.create({
      studentId,
      courseId: student.courseId,
      teacherId,
      certificateNumber,
    });
    return { cert: await cert.populate(POPULATE), student, alreadyIssued: false };
  }

  findForStudent(studentId: string) {
    return this.certificateModel
      .find({ studentId })
      .sort({ issuedAt: -1 })
      .populate(POPULATE);
  }
}
