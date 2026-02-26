import { Saida } from '../../domain/entity/saida';
import { SaidaOrmEntity } from '../entity/saida.orm-entity';

export class SaidaMapper {
  public static toDomain(saida: SaidaOrmEntity) {
    return Saida.create(saida.uuid, saida.name, saida.value, saida.criacaoData);
  }
}
