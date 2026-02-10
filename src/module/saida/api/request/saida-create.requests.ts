import { ApiProperty } from '@nestjs/swagger'
import { Type } from 'class-transformer'
import { IsNotEmpty, IsNumber, IsString } from 'class-validator'

export class SaidaCreateRequest {

  @ApiProperty({required: true, type: String, example: 'Despesa de testes'})
  @IsNotEmpty()
  @IsString()
  name!: string

  @ApiProperty({required: true, type: Number, example: 2.5})
  @IsNotEmpty()
  @Type(() => Number)
  @IsNumber()
  value!: number
}
