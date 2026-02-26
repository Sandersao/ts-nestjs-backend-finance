import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsInt, IsNotEmpty, Min } from 'class-validator';

export class PaginacaoRequest {
  @ApiProperty({ required: false, default: 0 })
  @IsNotEmpty()
  @Type(() => Number)
  @IsInt()
  @Min(0)
  page: number = 0;

  @ApiProperty({ required: false, default: 10 })
  @IsNotEmpty()
  @Type(() => Number)
  @IsInt()
  @Min(1)
  perPage: number = 10;
}
