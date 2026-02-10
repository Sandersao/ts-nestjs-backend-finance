import { SaidaEntity } from "../../domain/entity/saida.entity"
import { SaidaRepository } from "../../domain/repository/saida.repository"
import { SaidaCreateCommand } from "../dto/saida-create.command"

export class SaidaCreateUseCase {
  constructor(
    private readonly repository: SaidaRepository,
  ) {}

  async execute(command: SaidaCreateCommand) {
    const saida = SaidaEntity.create(command.name, command.value)
    await this.repository.save(saida)
    return saida
  }
}
