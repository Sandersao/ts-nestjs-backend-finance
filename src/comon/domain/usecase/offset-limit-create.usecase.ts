import { Injectable } from "@nestjs/common";
import { LimitOffsetCreateCommand } from "../dto/limit-offset-create.command";
import { LimitOffsetEntity } from "../entity/limit-offset.entity";
import { RegistroPaginaZeradoException } from "../exception/registro-pagina-zerado.exception";

@Injectable()
export class LimitOffsetCreateUsecase {
  public static create(command: LimitOffsetCreateCommand) {
    if (command.perPage <= 0) {
      throw new RegistroPaginaZeradoException();
    }

    const limit = command.perPage ?? 10;

    const offset = command.page * command.perPage;

    return new LimitOffsetEntity(limit, offset);
  }

}