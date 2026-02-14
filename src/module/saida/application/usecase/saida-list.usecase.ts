import { SaidaListCommand } from '../dto/saida-list.command';
import {
  SAIDA_REPOSITORY,
  SaidaRepository,
} from '../../domain/repository/saida.repository';
import { Inject } from '@nestjs/common';
import { PaginacaoEntity } from 'src/common/domain/entity/paginacao.entity';

export class SaidaListUseCase {
  constructor(
    @Inject(SAIDA_REPOSITORY)
    private readonly repository: SaidaRepository,
  ) {}

  async execute(command: SaidaListCommand) {
    const paginacao = PaginacaoEntity.create(
      command.page,
      command.perPage,
    );
    const saidaList = await this.repository.findAll(
      paginacao.limit,
      paginacao.offset,
      command.name,
    );
    const saidaTotal = await this.repository.count(command.name);
    paginacao.appendTotal(saidaTotal);
    return {
      data: saidaList,
      pagination: paginacao,
    };
  }
}
