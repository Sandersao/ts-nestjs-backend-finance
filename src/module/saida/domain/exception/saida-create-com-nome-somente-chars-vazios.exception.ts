import { DomainException } from '@/common/domain/exception/domain.exception';

export class SaidaCreateComNomeSomenteCharsVaziosException extends DomainException {
  constructor() {
    super(`O nome da saída não pode ser estar vazio`);
  }
}
