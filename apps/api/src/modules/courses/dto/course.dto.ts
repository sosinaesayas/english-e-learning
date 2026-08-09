import { IsBoolean, IsInt, IsOptional, IsString, Max, Min, MinLength } from "class-validator";

export class CreateCourseDto {
  @IsString()
  @MinLength(2)
  title: string;

  @IsInt()
  @Min(1)
  @Max(4)
  level: number;

  @IsOptional()
  @IsString()
  description?: string;
}

export class UpdateCourseDto {
  @IsOptional()
  @IsString()
  @MinLength(2)
  title?: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @IsBoolean()
  isPublished?: boolean;

  @IsOptional()
  @IsString()
  thumbnailUrl?: string;
}
