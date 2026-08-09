import { Body, Controller, Get, Post } from "@nestjs/common";
import { Role } from "@tutor/shared";
import type { JwtPayload } from "@tutor/shared";
import { CertificatesService } from "./certificates.service";
import { EmailService } from "../notifications/email.service";
import { courseCompletedEmail } from "../notifications/email-templates";
import { Roles } from "../../common/decorators/roles.decorator";
import { CurrentUser } from "../../common/decorators/current-user.decorator";
import { IssueCertificateDto } from "./dto/certificate.dto";

function toPublic(cert: any) {
  const obj = cert.toObject ? cert.toObject() : cert;
  return {
    id: String(obj._id),
    certificateNumber: obj.certificateNumber,
    issuedAt: obj.issuedAt,
    course: obj.courseId && {
      id: String(obj.courseId._id ?? obj.courseId),
      title: obj.courseId.title,
      level: obj.courseId.level,
    },
    teacher: obj.teacherId && {
      id: String(obj.teacherId._id ?? obj.teacherId),
      name: obj.teacherId.name,
    },
  };
}

@Controller("certificates")
export class CertificatesController {
  constructor(
    private certificatesService: CertificatesService,
    private emailService: EmailService,
  ) {}

  @Post()
  @Roles(Role.Teacher)
  async issue(@Body() dto: IssueCertificateDto, @CurrentUser() user: JwtPayload) {
    const { cert, student, alreadyIssued } = await this.certificatesService.issue(
      dto.studentId,
      user.sub,
    );
    if (!alreadyIssued) {
      await this.emailService.send({
        to: student.email,
        subject: "Congratulations — course completed!",
        html: courseCompletedEmail((cert.courseId as any).title),
      });
    }
    return toPublic(cert);
  }

  @Get()
  @Roles(Role.Student)
  async findMine(@CurrentUser() user: JwtPayload) {
    return (await this.certificatesService.findForStudent(user.sub)).map(toPublic);
  }
}
