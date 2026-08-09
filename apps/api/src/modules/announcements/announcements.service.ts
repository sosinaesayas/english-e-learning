import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Announcement, AnnouncementDocument } from "./schemas/announcement.schema";
import { CreateAnnouncementDto } from "./dto/announcement.dto";

@Injectable()
export class AnnouncementsService {
  constructor(
    @InjectModel(Announcement.name) private announcementModel: Model<AnnouncementDocument>,
  ) {}

  findForTeacher(teacherId: string) {
    return this.announcementModel
      .find({ authorId: teacherId })
      .sort({ createdAt: -1 })
      .populate({ path: "authorId", select: "name" });
  }

  findForStudent(teacherId: string) {
    return this.findForTeacher(teacherId);
  }

  findLatestForTeacher(teacherId: string) {
    return this.announcementModel.findOne({ authorId: teacherId }).sort({ createdAt: -1 });
  }

  async create(dto: CreateAnnouncementDto, authorId: string) {
    const doc = await this.announcementModel.create({ ...dto, authorId });
    return doc.populate({ path: "authorId", select: "name" });
  }

  async remove(id: string, authorId: string) {
    const res = await this.announcementModel.deleteOne({ _id: id, authorId });
    if (res.deletedCount === 0) throw new NotFoundException("Announcement not found");
  }
}
