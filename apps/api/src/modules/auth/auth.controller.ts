import {
  Body,
  Controller,
  Get,
  HttpCode,
  Post,
  Req,
  Res,
  UnauthorizedException,
} from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import type { Request, Response } from "express";
import { AuthService } from "./auth.service";
import { LoginDto } from "./dto/login.dto";
import { ForgotPasswordDto } from "./dto/forgot-password.dto";
import { ResetPasswordDto } from "./dto/reset-password.dto";
import { Public } from "../../common/decorators/public.decorator";
import { CurrentUser } from "../../common/decorators/current-user.decorator";
import type { JwtPayload } from "@tutor/shared";
import { UsersService } from "../users/users.service";

const REFRESH_PATH = "/api/v1/auth/refresh";

@Controller("auth")
export class AuthController {
  constructor(
    private authService: AuthService,
    private usersService: UsersService,
    private config: ConfigService,
  ) {}

  private setAuthCookies(res: Response, accessToken: string, refreshToken: string) {
    const isProd = this.config.get<string>("nodeEnv") === "production";
    res.cookie("access_token", accessToken, {
      httpOnly: true,
      secure: isProd,
      sameSite: "lax",
      maxAge: this.config.get<number>("jwt.accessTtlMs"),
      path: "/",
    });
    res.cookie("refresh_token", refreshToken, {
      httpOnly: true,
      secure: isProd,
      sameSite: "lax",
      maxAge: this.config.get<number>("jwt.refreshTtlMs"),
      path: REFRESH_PATH,
    });
  }

  @Public()
  @Post("login")
  @HttpCode(200)
  async login(@Body() dto: LoginDto, @Res({ passthrough: true }) res: Response) {
    const user = await this.authService.validateUser(dto.email, dto.password);
    const { accessToken, refreshToken } = this.authService.issueTokens(user);
    this.setAuthCookies(res, accessToken, refreshToken);
    return {
      id: user._id.toString(),
      name: user.name,
      email: user.email,
      role: user.role,
      status: user.status,
      mustResetPassword: user.mustResetPassword,
    };
  }

  @Public()
  @Post("refresh")
  @HttpCode(200)
  async refresh(@Req() req: Request, @Res({ passthrough: true }) res: Response) {
    const refreshToken = req.cookies?.refresh_token;
    if (!refreshToken) throw new UnauthorizedException("No refresh token");
    const tokens = await this.authService.refresh(refreshToken);
    this.setAuthCookies(res, tokens.accessToken, tokens.refreshToken);
    return { ok: true };
  }

  @Post("logout")
  @HttpCode(200)
  async logout(@Res({ passthrough: true }) res: Response) {
    res.clearCookie("access_token", { path: "/" });
    res.clearCookie("refresh_token", { path: REFRESH_PATH });
    return { ok: true };
  }

  @Get("me")
  async me(@CurrentUser() user: JwtPayload) {
    const dbUser = await this.usersService.findById(user.sub);
    if (!dbUser) throw new UnauthorizedException();
    return {
      id: dbUser._id.toString(),
      name: dbUser.name,
      email: dbUser.email,
      role: dbUser.role,
      status: dbUser.status,
      mustResetPassword: dbUser.mustResetPassword,
    };
  }

  @Public()
  @Post("forgot-password")
  @HttpCode(200)
  async forgotPassword(@Body() dto: ForgotPasswordDto) {
    await this.authService.forgotPassword(dto.email);
    return { ok: true };
  }

  @Public()
  @Post("reset-password")
  @HttpCode(200)
  async resetPassword(@Body() dto: ResetPasswordDto) {
    await this.authService.resetPassword(dto.token, dto.newPassword);
    return { ok: true };
  }
}
