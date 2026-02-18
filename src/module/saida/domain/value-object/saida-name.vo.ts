import { ValueObject } from '@src/common/domain/value-object/value-object';
import { SaidaCreateComNomeSomenteCharsVaziosException } from '../exception/saida-create-com-nome-somente-chars-vazios.exception';

export class SaidaNameVo extends ValueObject<string> {
  constructor(value: string) {
    super(value);
  }

  static create(name: string) {
    if (!name || name.trim().length === 0) {
      throw new SaidaCreateComNomeSomenteCharsVaziosException();
    }

    return new SaidaNameVo(name.trim());
  }
}
