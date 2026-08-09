import { IsArray, IsBoolean, IsInt, IsOptional, IsString, Min, MinLength } from "class-validator";

export class CreateLessonDto {
  @IsString()
  @MinLength(2)
  title: string;

  @IsOptional()
  @IsInt()
  @Min(0)
  order?: number;

  @IsOptional()
  @IsString()
  slidesUrl?: string;

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  pdfUrls?: string[];

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  videoUrls?: string[];
}

export class UpdateLessonDto {
  @IsOptional()
  @IsString()
  @MinLength(2)
  title?: string;

  @IsOptional()
  @IsInt()
  @Min(0)
  order?: number;

  @IsOptional()
  @IsString()
  slidesUrl?: string;

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  pdfUrls?: string[];

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  videoUrls?: string[];
}

export class ToggleLessonCompleteDto {
  @IsBoolean()
  completed: boolean;
}
