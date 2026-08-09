import { Type } from "class-transformer";
import {
  ArrayMinSize,
  IsArray,
  IsBoolean,
  IsEnum,
  IsISO8601,
  IsInt,
  IsMongoId,
  IsOptional,
  IsString,
  Min,
  MinLength,
  ValidateNested,
} from "class-validator";
import { AttendanceStatus } from "@tutor/shared";

export class CreateClassDto {
  @IsMongoId()
  courseId: string;

  @IsMongoId()
  teacherId: string;

  @IsArray()
  @ArrayMinSize(1)
  @IsMongoId({ each: true })
  studentIds: string[];

  @IsISO8601()
  startsAt: string;

  @IsInt()
  @Min(5)
  durationMinutes: number;

  @IsString()
  @MinLength(1)
  meetLink: string;
}

export class UpdateClassDto {
  @IsOptional()
  @IsMongoId()
  teacherId?: string;

  @IsOptional()
  @IsArray()
  @ArrayMinSize(1)
  @IsMongoId({ each: true })
  studentIds?: string[];

  @IsOptional()
  @IsISO8601()
  startsAt?: string;

  @IsOptional()
  @IsInt()
  @Min(5)
  durationMinutes?: number;

  @IsOptional()
  @IsString()
  @MinLength(1)
  meetLink?: string;

  @IsOptional()
  @IsBoolean()
  cancelled?: boolean;
}

export class AttendanceRecordDto {
  @IsMongoId()
  studentId: string;

  @IsEnum(AttendanceStatus)
  status: AttendanceStatus;
}

export class MarkAttendanceDto {
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => AttendanceRecordDto)
  records: AttendanceRecordDto[];
}
