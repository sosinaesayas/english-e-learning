import { IsMongoId } from "class-validator";

export class AssignTeacherDto {
  @IsMongoId()
  teacherId: string;
}

export class AssignCourseDto {
  @IsMongoId()
  courseId: string;
}
