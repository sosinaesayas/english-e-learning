import { IsEmail, IsEnum, IsOptional, IsString, MinLength } from "class-validator";
import { Role } from "@tutor/shared";

export class CreateUserDto {
  @IsString()
  @MinLength(2)
  name: string;

  @IsEmail()
  email: string;

  @IsOptional()
  @IsString()
  phone?: string;

  @IsEnum([Role.Teacher, Role.Student])
  role: Role.Teacher | Role.Student;
}
