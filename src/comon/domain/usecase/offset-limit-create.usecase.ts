import { LimitOffsetCreateCommand } from "../dto/limit-offset-create.command";
import { LimitOffsetEntity } from "../entity/limit-offset.entity";
import { RegistroPaginaZeradoException } from "../exception/registro-pagina-zerado.exception";

export class LimitOffsetCreateUsecase {
  constructor(
    public readonly limit: number,
    public readonly offset: number,
  ) { }

  public static create(command: LimitOffsetCreateCommand) {
    if (command.perPage <= 0) {
      throw new RegistroPaginaZeradoException();
    }

    const limit = command.perPage ?? 10;

    const offset = command.page * command.perPage;

    return new LimitOffsetEntity(limit, offset);
  }

}