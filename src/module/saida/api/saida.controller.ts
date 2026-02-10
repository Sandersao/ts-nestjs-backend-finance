import { Body, Controller, Get, Post, Query } from '@nestjs/common'
import { SaidaCreateRequest } from './request/saida-create.requests'
import { SaidaCreateUseCase } from '../application/usecase/saida-create.usecase'
import { SaidaListUseCase } from '../application/usecase/saida-list.usecase'
import { SaidaListRequest } from './request/saida-list.requests'
import { ApiBody, ApiQuery } from '@nestjs/swagger'

@Controller('/saida')
export class SaidaController {
  constructor(
    private readonly saidaListUseCase: SaidaListUseCase,
    private readonly saidaCreateUseCase: SaidaCreateUseCase,
  ) { }

  @Get()
  @ApiQuery({type: SaidaListRequest})
  async findAll(@Query() query: SaidaListRequest) {
    return this.saidaListUseCase.execute(query)
  }

  @Post()
  @ApiBody({type: SaidaCreateRequest})
  async create(@Body() body: SaidaCreateRequest) {
    return this.saidaCreateUseCase.execute(body)
  }
}
