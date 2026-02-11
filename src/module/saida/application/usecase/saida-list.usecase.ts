import { SaidaListCommand } from "../dto/saida-list.command"
import { SAIDA_REPOSITORY, SaidaRepository } from "../repository/saida.repository";
import { Inject } from "@nestjs/common";
import { LimitOffsetCreateUsecase } from "src/comon/domain/usecase/offset-limit-create.usecase";

export class SaidaListUseCase {
  constructor(
    @Inject(SAIDA_REPOSITORY)
    private readonly repository: SaidaRepository,
  ) { }

  async execute(command: SaidaListCommand) {
    const { limit, offset } = LimitOffsetCreateUsecase.create({ page: command.page, perPage: command.perPage })
    const saidaList = await this.repository.findAll(limit, offset, command.name!);
    return saidaList
  }
}
