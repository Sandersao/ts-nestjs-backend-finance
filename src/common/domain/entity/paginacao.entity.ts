import { RegistroPaginaZeradoException } from '../exception/registro-pagina-zerado.exception';

export class PaginacaoEntity {
  constructor(
    public readonly page: number,
    public readonly perPage: number,
    public _total?: number,
    public totalPages?: number,
  ) {}

  public static create(page: number, perPage: number): PaginacaoEntity {
    if (perPage <= 0) {
      throw new RegistroPaginaZeradoException();
    }
    return new PaginacaoEntity(page, perPage);
  }

  set total(total: number) {
    this._total = total;
    this.calcTotalPages(this.perPage, total);
  }

  get total() {
    return this._total!;
  }

  private calcTotalPages(perPage: number, total: number) {
    this.totalPages = Math.max(1, Math.ceil(total / perPage));
  }

  get limit() {
    return this.perPage;
  }

  get offset() {
    return this.perPage * this.page;
  }

  get currentPerPage(): number {
    if (!this.total) {
      return 0;
    }
    const remaining = this.total - this.offset;
    return Math.max(0, Math.min(this.perPage, remaining));
  }
}
