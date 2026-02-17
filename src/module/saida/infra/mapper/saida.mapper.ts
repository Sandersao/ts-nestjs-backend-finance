import { Saida } from '../../domain/entity/saida';
import { SaidaOrmEntity } from '../entity/saida.orm-entity';

export class SaidaMapper {
  public static toOrm(saida: Saida) {
    const orm = new SaidaOrmEntity();
    orm.uuid = saida.uuid;
    orm.name = saida.name;
    orm.value = saida.value;
    orm.criacaoData = saida.criacao.date;
    return orm;
  }

  public static toDomain(saida: SaidaOrmEntity) {
    return Saida.create(saida.uuid, saida.name, saida.value, saida.criacaoData);
  }
}
