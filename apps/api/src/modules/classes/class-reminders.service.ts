import { Injectable, Logger } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Cron, CronExpression } from "@nestjs/schedule";
import { ClassSchedule, ClassScheduleDocument } from "./schemas/class-schedule.schema";
import { POPULATE } from "./classes.service";
import { EmailService } from "../notifications/email.service";
import { classReminderEmail } from "../notifications/email-templates";

@Injectable()
export class ClassRemindersService {
  private readonly logger = new Logger(ClassRemindersService.name);

  constructor(
    @InjectModel(ClassSchedule.name) private classModel: Model<ClassScheduleDocument>,
    private emailService: EmailService,
  ) {}

  @Cron(CronExpression.EVERY_5_MINUTES)
  async sendReminders() {
    await this.remind(24, "reminded24h", 23, 25);
    await this.remind(1, "reminded1h", 0.75, 1.25);
  }

  private async remind(
    hoursBefore: number,
    flagField: "reminded24h" | "reminded1h",
    minHours: number,
    maxHours: number,
  ) {
    const now = Date.now();
    const from = new Date(now + minHours * 3_600_000);
    const to = new Date(now + maxHours * 3_600_000);

    const classes = await this.classModel
      .find({ startsAt: { $gte: from, $lte: to }, cancelled: false, [flagField]: false })
      .populate(POPULATE);

    for (const cls of classes) {
      const obj = cls.toObject();
      const timeLabel = new Intl.DateTimeFormat("en-US", {
        hour: "numeric",
        minute: "2-digit",
      }).format(obj.startsAt);
      const courseTitle = (obj.courseId as any)?.title ?? "your class";
      const recipients = [obj.teacherId, ...obj.studentIds].filter(Boolean) as any[];

      for (const recipient of recipients) {
        if (!recipient?.email) continue;
        await this.emailService.send({
          to: recipient.email,
          subject: `Class reminder — starts in ${hoursBefore}h`,
          html: classReminderEmail(courseTitle, timeLabel, obj.meetLink, hoursBefore),
        });
      }

      await this.classModel.updateOne({ _id: cls._id }, { [flagField]: true });
      this.logger.log(`Sent ${hoursBefore}h reminder for class ${cls._id}`);
    }
  }
}
