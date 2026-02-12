import { RegistroPaginaZeradoException } from "../exception/registro-pagina-zerado.exception";

export class IntervaloEntity {
  constructor(
    public readonly limit: number,
    public readonly offset: number
  ) { }

  public static create(perPage: number, page: number) {
    if (perPage <= 0) {
      throw new RegistroPaginaZeradoException();
    }

    const limit = perPage ?? 10;

    const offset = page * perPage;

    return new IntervaloEntity(limit, offset);
  }
}