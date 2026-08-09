import { BadRequestException, Injectable, UnauthorizedException } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { JwtService } from "@nestjs/jwt";
import * as bcrypt from "bcryptjs";
import { randomBytes, createHash } from "crypto";
import { JwtPayload } from "@tutor/shared";
import { UsersService } from "../users/users.service";
import { EmailService } from "../notifications/email.service";
import { passwordResetEmail } from "../notifications/email-templates";
import { UserDocument } from "../users/schemas/user.schema";

interface RefreshPayload extends JwtPayload {
  tokenVersion: number;
  type: "refresh";
}

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
    private config: ConfigService,
    private emailService: EmailService,
  ) {}

  async validateUser(email: string, password: string): Promise<UserDocument> {
    const user = await this.usersService.findByEmail(email);
    if (!user) throw new UnauthorizedException("Invalid email or password");
    const matches = await bcrypt.compare(password, user.passwordHash);
    if (!matches) throw new UnauthorizedException("Invalid email or password");
    return user;
  }

  issueTokens(user: UserDocument) {
    const payload: JwtPayload = { sub: user._id.toString(), role: user.role, name: user.name };
    const accessToken = this.jwtService.sign(payload, {
      expiresIn: this.config.get<string>("jwt.accessTtl") as any,
    });
    const refreshPayload: RefreshPayload = {
      ...payload,
      tokenVersion: user.tokenVersion,
      type: "refresh",
    };
    const refreshToken = this.jwtService.sign(refreshPayload, {
      expiresIn: this.config.get<string>("jwt.refreshTtl") as any,
    });
    return { accessToken, refreshToken };
  }

  async refresh(refreshToken: string) {
    let payload: RefreshPayload;
    try {
      payload = this.jwtService.verify<RefreshPayload>(refreshToken);
    } catch {
      throw new UnauthorizedException("Invalid refresh token");
    }
    if (payload.type !== "refresh") throw new UnauthorizedException("Invalid token type");

    const user = await this.usersService.findById(payload.sub);
    if (!user || user.tokenVersion !== payload.tokenVersion) {
      throw new UnauthorizedException("Session expired, please log in again");
    }
    return this.issueTokens(user);
  }

  async forgotPassword(email: string) {
    const user = await this.usersService.findByEmail(email);
    if (!user) return; // no user enumeration

    const rawToken = randomBytes(32).toString("hex");
    const tokenHash = createHash("sha256").update(rawToken).digest("hex");
    const expiresAt = new Date(Date.now() + 60 * 60 * 1000);
    await this.usersService.createResetToken(user._id, tokenHash, expiresAt);

    const resetUrl = `${this.config.get<string>("webUrl")}/reset-password?token=${rawToken}`;
    await this.emailService.send({
      to: user.email,
      subject: "Reset your password",
      html: passwordResetEmail(resetUrl),
    });
  }

  async resetPassword(token: string, newPassword: string) {
    const tokenHash = createHash("sha256").update(token).digest("hex");
    const resetToken = await this.usersService.findValidResetToken(tokenHash);
    if (!resetToken) throw new BadRequestException("Invalid or expired reset link");

    const passwordHash = await bcrypt.hash(newPassword, 10);
    await this.usersService.updatePassword(resetToken.userId, passwordHash);
    await this.usersService.deleteResetToken(resetToken._id);
  }
}
