import { PaginacaoCommand } from '@src/common/application/dto/paginacao.command';

export class SaidaListCommand extends PaginacaoCommand {
  constructor(
    public readonly page: number,
    public readonly perPage: number,
    public readonly name?: string,
    public readonly ocorrencia?: Date,
  ) {
    super(page, perPage);
  }
}
