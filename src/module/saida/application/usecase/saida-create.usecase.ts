import { SaidaEntity } from "../../domain/entity/saida.entity"
import { SaidaCreateCommand } from "../dto/saida-create.command"
import { Inject, Injectable } from "@nestjs/common"
import { SAIDA_REPOSITORY, SaidaRepository } from "../repository/saida.repository"

@Injectable()
export class SaidaCreateUseCase {
  constructor(
    @Inject(SAIDA_REPOSITORY)
    private readonly repository: SaidaRepository,
  ) {}

  async execute(command: SaidaCreateCommand) {
    const saida = SaidaEntity.create(command.name, command.value)
    await this.repository.save(saida)
    return saida
  }
}
