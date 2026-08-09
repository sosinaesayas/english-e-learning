import { Type } from "class-transformer";
import {
  ArrayMaxSize,
  ArrayMinSize,
  IsArray,
  IsInt,
  IsMongoId,
  IsString,
  Min,
  MinLength,
  ValidateNested,
} from "class-validator";

export class QuizQuestionDto {
  @IsString()
  @MinLength(1)
  text: string;

  @IsArray()
  @ArrayMinSize(2)
  @ArrayMaxSize(6)
  @IsString({ each: true })
  options: string[];

  @IsInt()
  @Min(0)
  correctIndex: number;
}

export class CreateQuizDto {
  @IsMongoId()
  courseId: string;

  @IsString()
  @MinLength(1)
  title: string;

  @IsArray()
  @ArrayMinSize(1)
  @ValidateNested({ each: true })
  @Type(() => QuizQuestionDto)
  questions: QuizQuestionDto[];
}

export class AttemptQuizDto {
  @IsArray()
  @IsInt({ each: true })
  answers: number[];
}
