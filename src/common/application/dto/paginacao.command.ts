export class PaginacaoCommand {
  constructor(
    public readonly page: number,
    public readonly perPage: number,
  ) {}
}
