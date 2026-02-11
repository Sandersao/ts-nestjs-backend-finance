import { PaginacaoCreateCommand } from "../dto/paginacao-create.command";
import { PAginacaoEntity } from "../entity/paginacao.entity";
import { RegistroPaginaZeradoException } from "../exception/registro-pagina-zerado.exception";

export class PaginacaoCreateUsecase {
  constructor(
    public readonly page: number,
    public readonly perPage: number,
    public readonly total: number,
    public readonly totalPages: number,
  ) { }

  public static execute(command: PaginacaoCreateCommand) {
    if (command.perPage <= 0) {
      throw new RegistroPaginaZeradoException();
    }

    const totalPages = Math.max(1, Math.ceil(command.total / command.perPage));

    return new PAginacaoEntity(
      command.page,
      command.perPage,
      command.total,
      totalPages
    );
  }
}