import {
  ArrayMinSize,
  IsArray,
  IsInt,
  IsISO8601,
  IsMongoId,
  IsOptional,
  IsString,
  Max,
  Min,
  MinLength,
} from "class-validator";

export class CreateHomeworkDto {
  @IsMongoId()
  courseId: string;

  @IsString()
  @MinLength(1)
  title: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsISO8601()
  dueDate: string;

  @IsArray()
  @ArrayMinSize(1)
  @IsMongoId({ each: true })
  studentIds: string[];
}

export class UpdateHomeworkDto {
  @IsOptional()
  @IsMongoId()
  courseId?: string;

  @IsOptional()
  @IsString()
  @MinLength(1)
  title?: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @IsISO8601()
  dueDate?: string;

  @IsOptional()
  @IsArray()
  @ArrayMinSize(1)
  @IsMongoId({ each: true })
  studentIds?: string[];
}

export class SubmitHomeworkDto {
  @IsString()
  @MinLength(1)
  text: string;
}

export class GradeHomeworkDto {
  @IsInt()
  @Min(0)
  @Max(100)
  grade: number;

  @IsOptional()
  @IsString()
  feedback?: string;
}
