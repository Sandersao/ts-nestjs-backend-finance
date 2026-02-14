import { RegistroPaginaZeradoException } from '../exception/registro-pagina-zerado.exception';

export class PaginacaoEntity {
  constructor(
    public readonly page: number,
    public readonly perPage: number,
    public total?: number,
    public totalPages?: number,
  ) {}

  public static create(page: number, perPage: number) {
    if (perPage <= 0) {
      throw new RegistroPaginaZeradoException();
    }
    return new PaginacaoEntity(page, perPage);
  }

  public appendTotal(total: number) {
    this.total = total;
    this.calcTotalPages(this.perPage, total)
  }

  private calcTotalPages(perPage: number, total: number) {
    this.totalPages = Math.max(1, Math.ceil(total / perPage));
  }

  get limit() {
    return this.perPage;
  }

  get offset() {
    return this.page * this.perPage;
  }
}
