import { PaginacaoCreateUsecase } from "src/comon/domain/usecase/paginacao-create.usecase";
import { SaidaListCommand } from "../dto/saida-list.command"
import { SAIDA_REPOSITORY, SaidaRepository } from "../repository/saida.repository";
import { Inject } from "@nestjs/common";
import { LimitOffsetCreateUsecase } from "src/comon/domain/usecase/offset-limit-create.usecase";

export class SaidaListUseCase {
  constructor(
    @Inject(SAIDA_REPOSITORY)
    private readonly repository: SaidaRepository,
    private readonly paginacaoCreateUsecase: PaginacaoCreateUsecase
  ) { }

  async execute(command: SaidaListCommand) {
    const { limit, offset } = LimitOffsetCreateUsecase.create({ page: command.page, perPage: command.perPage })
    const saidaList = await this.repository.findAll(limit, offset, command.name);
    const saidaTotal = await this.repository.count(command.name);
    const paginacao = this.paginacaoCreateUsecase.execute({page: command.page, perPage: command.perPage, total: saidaTotal})
    return {
      data: saidaList,
      pagination: paginacao
    }
  }
}
