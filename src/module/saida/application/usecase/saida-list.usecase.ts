import { SaidaListCommand } from "../dto/saida-list.command"
import { SAIDA_REPOSITORY, SaidaRepository } from "../repository/saida.repository";
import { Inject } from "@nestjs/common";
import { IntervaloEntity } from "src/comon/domain/entity/intervalor.entity";
import { PaginacaoEntity } from "src/comon/domain/entity/paginacao.entity";

export class SaidaListUseCase {
  constructor(
    @Inject(SAIDA_REPOSITORY)
    private readonly repository: SaidaRepository
  ) { }

  async execute(command: SaidaListCommand) {
    const intervalo = IntervaloEntity.create(command.perPage, command.page);
    const saidaList = await this.repository.findAll(intervalo.limit, intervalo.offset, command.name);
    const saidaTotal = await this.repository.count(command.name);
    const paginacao = PaginacaoEntity.create(command.page, command.perPage, saidaTotal);
    return {
      data: saidaList,
      pagination: paginacao
    }
  }
}
