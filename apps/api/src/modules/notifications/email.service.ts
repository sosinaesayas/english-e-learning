import { Injectable, Logger } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";

export interface SendEmailInput {
  to: string;
  subject: string;
  html: string;
}

@Injectable()
export class EmailService {
  private readonly logger = new Logger(EmailService.name);
  private readonly apiKey: string;
  private readonly fromEmail: string;

  constructor(private config: ConfigService) {
    this.apiKey = this.config.get<string>("resend.apiKey") ?? "";
    this.fromEmail = this.config.get<string>("resend.fromEmail")!;
  }

  async send(input: SendEmailInput): Promise<"sent" | "skipped-no-provider" | "failed"> {
    if (!this.apiKey) {
      this.logger.log(
        `[email:console-fallback] to=${input.to} subject="${input.subject}"\n${input.html}`,
      );
      return "skipped-no-provider";
    }

    try {
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${this.apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: this.fromEmail,
          to: input.to,
          subject: input.subject,
          html: input.html,
        }),
      });
      if (!res.ok) {
        this.logger.error(`Resend send failed: ${res.status} ${await res.text()}`);
        return "failed";
      }
      return "sent";
    } catch (err) {
      this.logger.error(`Resend send threw: ${(err as Error).message}`);
      return "failed";
    }
  }
}
