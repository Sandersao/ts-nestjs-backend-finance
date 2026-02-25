import { PaginacaoEntity } from '@src/common/domain/entity/paginacao.entity';

export function makePaginacao(props: { page?: number; perPage?: number }) {
  return PaginacaoEntity.create(props.page, props.perPage);
}
