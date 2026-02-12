import { RegistroPaginaZeradoException } from "../exception/registro-pagina-zerado.exception";

export class PaginacaoEntity {
    constructor(
        public readonly page: number,
        public readonly perPage: number,
        public readonly total: number,
        public readonly totalPages: number
    ){}

    public static create(page: number, perPage: number, total: number) {
        if (perPage <= 0) {
          throw new RegistroPaginaZeradoException();
        }
    
        const totalPages = Math.max(1, Math.ceil(total / perPage));
    
        return new PaginacaoEntity(
          page,
          perPage,
          total,
          totalPages
        );
      }
}