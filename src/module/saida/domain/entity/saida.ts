import { SaidaName } from '../value-object/saida-name';
import { UuidVo } from '../../../../common/domain/value-object/uuid.vo';
import { SaidaValue } from '../value-object/saida-value';
import { CriacaoVo } from '@src/common/domain/value-object/criacao.vo';

export class Saida {
  constructor(
    private readonly _uuid: UuidVo,
    private readonly _name: SaidaName,
    private readonly _value: SaidaValue,
    private readonly _criacao: CriacaoVo,
  ) {}

  static create(uuid: string, name: string, value: number, cracaoData: Date) {
    const uuidVo = new UuidVo(uuid);
    const nameVo = new SaidaName(name);
    const valueVo = new SaidaValue(value);
    const criacaoDataVo = new CriacaoVo(cracaoData);
    return new Saida(uuidVo, nameVo, valueVo, criacaoDataVo);
  }

  get uuid() {
    return this._uuid.value;
  }
  get name() {
    return this._name.value;
  }
  get value() {
    return this._value.value;
  }
  get criacao() {
    return this._criacao;
  }
}
