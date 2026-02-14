import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsNumber, IsOptional, IsString } from 'class-validator';

export class SaidaCreateRequest {
  @ApiProperty({ required: false, type: String, example: 'Despesa de testes' })
  @IsOptional()
  @IsString()
  name!: string;

  @ApiProperty({ required: false, type: Number, example: 2.5 })
  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  value!: number;
}
