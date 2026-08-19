import { Injectable, Logger } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { createHash } from "crypto";

export interface CloudinaryUploadResult {
  url: string;
  originalName: string;
}

@Injectable()
export class CloudinaryService {
  private readonly logger = new Logger(CloudinaryService.name);
  private readonly cloudName: string;
  private readonly apiKey: string;
  private readonly apiSecret: string;

  constructor(private config: ConfigService) {
    this.cloudName = this.config.get<string>("cloudinary.cloudName") ?? "";
    this.apiKey = this.config.get<string>("cloudinary.apiKey") ?? "";
    this.apiSecret = this.config.get<string>("cloudinary.apiSecret") ?? "";
  }

  get isConfigured(): boolean {
    return Boolean(this.cloudName && this.apiKey && this.apiSecret);
  }

  async upload(file: Express.Multer.File): Promise<CloudinaryUploadResult> {
    // Signed upload via Cloudinary's plain REST API (no SDK dependency, same
    // style as EmailService's Resend integration). Signature per Cloudinary's
    // spec: sha1 of the params-to-sign string with the api secret appended.
    const timestamp = Math.floor(Date.now() / 1000);
    const signature = createHash("sha1")
      .update(`timestamp=${timestamp}${this.apiSecret}`)
      .digest("hex");

    const form = new FormData();
    form.append(
      "file",
      new Blob([new Uint8Array(file.buffer)], { type: file.mimetype }),
      file.originalname,
    );
    form.append("api_key", this.apiKey);
    form.append("timestamp", String(timestamp));
    form.append("signature", signature);

    const res = await fetch(`https://api.cloudinary.com/v1_1/${this.cloudName}/auto/upload`, {
      method: "POST",
      body: form,
    });

    if (!res.ok) {
      this.logger.error(`Cloudinary upload failed: ${res.status} ${await res.text()}`);
      throw new Error(`Cloudinary upload failed with status ${res.status}`);
    }

    const data = (await res.json()) as { secure_url: string };
    return { url: data.secure_url, originalName: file.originalname };
  }
}
