import { Body, Controller, Get, Post, Query } from '@nestjs/common'
import { SaidaCreateRequest } from './request/saida-create.requests'
import { SaidaListRequest } from './request/saida-list.requests'
import { ApiBody } from '@nestjs/swagger'
import { SaidaApplication } from '../application/saida.appliaciton'

@Controller('/saida')
export class SaidaController {
  constructor(private readonly saidaApplication: SaidaApplication) { }

  @Get()
  async findAll(@Query() query: SaidaListRequest) {
    return this.saidaApplication.list(query)
  }

  @Post()
  @ApiBody({type: SaidaCreateRequest})
  async create(@Body() body: SaidaCreateRequest) {
    return this.saidaApplication.create(body)
  }
}
