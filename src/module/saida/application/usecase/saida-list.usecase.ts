import { SaidaRepository } from "../../domain/repository/saida.repository"
import { SaidaListCommand } from "../dto/saida-list.command"

export class SaidaListUseCase {
  constructor(
    private readonly repository: SaidaRepository,
  ) {}

  async execute(command: SaidaListCommand) {
    const saidaList = await this.repository.findAll(command.name, command.value)
    return saidaList
  }
}
