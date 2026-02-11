import { ApiProperty } from '@nestjs/swagger'
import { Type } from 'class-transformer'
import { IsDate, IsOptional, IsString } from 'class-validator'
import { PaginacaoRequest } from 'src/comon/api/request/paginacao.request'

export class SaidaListRequest extends PaginacaoRequest {
  @ApiProperty({required: false, type: String, example: 'Despesa de testes'})
  @IsOptional()
  @IsString()
  name?: string

  @IsOptional()
  @Type(() => Date)
  @IsDate()
  ocorrencia: Date
}
