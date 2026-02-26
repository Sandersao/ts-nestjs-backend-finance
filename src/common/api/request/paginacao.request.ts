import { ApiProperty } from '@nestjs/swagger';
import { Transform, Type } from 'class-transformer';
import { IsInt, Min } from 'class-validator';

export class PaginacaoRequest {
  @ApiProperty({ required: false, default: 0 })
  @Type(() => Number)
  @Transform(({ value }) => value ?? 0)
  @IsInt()
  @Min(0)
  page: number = 0;

  @ApiProperty({ required: false, default: 10 })
  @Transform(({ value }) => value ?? 10)
  @Type(() => Number)
  @IsInt()
  @Min(1)
  perPage: number = 10;
}
