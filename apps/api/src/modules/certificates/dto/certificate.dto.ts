import { IsMongoId } from "class-validator";

export class IssueCertificateDto {
  @IsMongoId()
  studentId: string;
}
