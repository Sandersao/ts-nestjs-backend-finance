import { SaidaNameVo } from '../value-object/saida-name.vo';
import { UuidVo } from '../../../../common/domain/value-object/uuid.vo';
import { SaidaValueVo } from '../value-object/saida-value.vo';
import { CriacaoVo } from '@src/common/domain/value-object/criacao.vo';

export class Saida {
  constructor(
    private readonly _uuid: UuidVo,
    private readonly _name: SaidaNameVo,
    private readonly _value: SaidaValueVo,
    private readonly _criacao: CriacaoVo,
  ) {}

  static create(uuid: string, name: string, value: number, cracaoData: Date) {
    const uuidVo = new UuidVo(uuid);
    const nameVo = new SaidaNameVo(name);
    const valueVo = new SaidaValueVo(value);
    const criacaoDataVo = CriacaoVo.create(cracaoData, 'default-user');
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
