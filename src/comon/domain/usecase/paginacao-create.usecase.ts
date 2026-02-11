import { Injectable } from "@nestjs/common";
import { PaginacaoCreateCommand } from "../dto/paginacao-create.command";
import { PaginacaoEntity } from "../entity/paginacao.entity";
import { RegistroPaginaZeradoException } from "../exception/registro-pagina-zerado.exception";

@Injectable()
export class PaginacaoCreateUsecase {
  public execute(command: PaginacaoCreateCommand) {
    if (command.perPage <= 0) {
      throw new RegistroPaginaZeradoException();
    }

    const totalPages = Math.max(1, Math.ceil(command.total / command.perPage));

    return new PaginacaoEntity(
      command.page,
      command.perPage,
      command.total,
      totalPages
    );
  }
}