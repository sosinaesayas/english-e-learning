import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { Certificate, CertificateSchema } from "./schemas/certificate.schema";
import { CertificatesService } from "./certificates.service";
import { CertificatesController } from "./certificates.controller";
import { UsersModule } from "../users/users.module";
import { NotificationsModule } from "../notifications/notifications.module";

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Certificate.name, schema: CertificateSchema }]),
    UsersModule,
    NotificationsModule,
  ],
  controllers: [CertificatesController],
  providers: [CertificatesService],
  exports: [CertificatesService],
})
export class CertificatesModule {}
