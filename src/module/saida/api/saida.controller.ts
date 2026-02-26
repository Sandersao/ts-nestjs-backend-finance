import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { SaidaCreateRequest } from '@src/module/saida/api/request/saida-create.requests';
import { SaidaListRequest } from '@src/module/saida/api/request/saida-list.requests';
import { ApiBody } from '@nestjs/swagger';
import { SaidaCreateUseCase } from '../application/usecase/saida-create.usecase';
import { SaidaListUseCase } from '../application/usecase/saida-list.usecase';

@Controller('/saida')
export class SaidaController {
  constructor(
    private readonly createUseCase: SaidaCreateUseCase,
    private readonly listUseCase: SaidaListUseCase,
  ) {}

  @Get()
  async findAll(@Query() query: SaidaListRequest) {
    return await this.listUseCase.execute(query);
  }

  @Post()
  @ApiBody({ type: SaidaCreateRequest })
  async create(@Body() body: SaidaCreateRequest) {
    return await this.createUseCase.execute(body);
  }
}
