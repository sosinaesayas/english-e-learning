import { BadGatewayException, Controller, Post, UploadedFile, UseInterceptors } from "@nestjs/common";
import { FileInterceptor } from "@nestjs/platform-express";
import { memoryStorage } from "multer";
import { Role } from "@tutor/shared";
import { Roles } from "../../common/decorators/roles.decorator";
import { CloudinaryService } from "./cloudinary.service";

@Controller("uploads")
@Roles(Role.Admin, Role.Teacher)
export class UploadsController {
  constructor(private cloudinary: CloudinaryService) {}

  @Post("local")
  @UseInterceptors(
    FileInterceptor("file", { storage: memoryStorage(), limits: { fileSize: 50 * 1024 * 1024 } }),
  )
  async uploadLocal(@UploadedFile() file: Express.Multer.File) {
    if (!this.cloudinary.isConfigured) {
      throw new BadGatewayException("File storage isn't configured (missing CLOUDINARY_* env vars)");
    }
    return this.cloudinary.upload(file);
  }
}
