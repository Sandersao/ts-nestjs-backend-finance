import { HttpStatus } from '@nestjs/common';
import { DomainException } from '@src/common/domain/exception/domain.exception';

export class SaidaCreateComNomeSomenteCharsVaziosException extends DomainException {
  constructor() {
    super(`O nome da saída não pode ser estar vazio`, HttpStatus.BAD_REQUEST);
  }
}
