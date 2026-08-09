import { IsInt, IsOptional, IsString, Min, MinLength } from "class-validator";

export class CreateModuleDto {
  @IsString()
  @MinLength(2)
  title: string;

  @IsOptional()
  @IsInt()
  @Min(0)
  order?: number;
}

export class UpdateModuleDto {
  @IsOptional()
  @IsString()
  @MinLength(2)
  title?: string;

  @IsOptional()
  @IsInt()
  @Min(0)
  order?: number;
}
