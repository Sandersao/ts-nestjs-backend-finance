export class PaginacaoEntity {
  constructor(
    public page: number,
    public perPage: number,
    public _total?: number,
    public totalPages?: number,
  ) {}

  public static create(page: number, perPage: number): PaginacaoEntity {
    const paginacao = new PaginacaoEntity(page ?? 0, perPage ?? 10);
    return paginacao;
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
