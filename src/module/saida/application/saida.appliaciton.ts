import { Injectable } from '@nestjs/common';
import { SaidaCreateUseCase } from './usecase/saida-create.usecase';
import { SaidaCreateCommand } from './dto/saida-create.command';
import { SaidaListUseCase } from './usecase/saida-list.usecase';
import { SaidaListCommand } from './dto/saida-list.command';
import { SaidaMapper } from './mapper/saida.mapper';

@Injectable()
export class SaidaApplication {
  constructor(
    private readonly createUseCase: SaidaCreateUseCase,
    private readonly listUseCase: SaidaListUseCase,
  ) {}

  create(command: SaidaCreateCommand) {
    return this.createUseCase.execute(command);
  }

  async list(command: SaidaListCommand) {
    const retorno = await this.listUseCase.execute(command);
    return {
      data: retorno.data.map((item) => SaidaMapper.toResponse(item)),
      pagination: retorno.pagination,
    };
  }
}
