import { IsEnum, IsOptional, IsString, MinLength } from "class-validator";
import { UserStatus } from "@tutor/shared";

export class UpdateUserDto {
  @IsOptional()
  @IsString()
  @MinLength(2)
  name?: string;

  @IsOptional()
  @IsString()
  phone?: string;

  @IsOptional()
  @IsEnum(UserStatus)
  status?: UserStatus;
}
