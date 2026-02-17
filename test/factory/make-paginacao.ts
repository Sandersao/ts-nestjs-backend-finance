import { PaginacaoEntity } from '@src/common/domain/entity/paginacao.entity';

export function makePaginacao(
  props?: Partial<{
    page: number;
    perPage: number;
  }>,
) {
  return PaginacaoEntity.create(props?.page ?? 0, props?.perPage ?? 10);
}
