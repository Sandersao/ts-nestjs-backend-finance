import { ApiProperty } from '@nestjs/swagger'
import { Type } from 'class-transformer'
import { IsDate, IsOptional, IsString } from 'class-validator'

export class SaidaListRequest {
  @ApiProperty({required: false, type: String, example: 'Despesa de testes'})
  @IsOptional()
  @IsString()
  name?: string

  @IsOptional()
  @Type(() => Date)
  @IsDate()
  criacao: Date
}
