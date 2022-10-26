/* eslint-disable prettier/prettier */
import { PartialType } from "@nestjs/mapped-types";
import { IsString, IsNumber } from "class-validator";
import { CreateMovieDto } from "./create-movie.dto";

export class UpdateMovieDto extends PartialType(CreateMovieDto) {}

// export class UpdateMovieDto {
//   @IsString()
//   readonly title?: string; // '?'는 필수값이 아니다 라는 뜻
//   @IsNumber()
//   readonly year?: number;
//   @IsString({ each: true })
//   readonly genres?: string[];
// }