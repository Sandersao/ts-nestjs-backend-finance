import { HttpStatus } from '@nestjs/common';
import { DomainException } from '@src/common/domain/exception/domain.exception';

export class SaidaCreateComValorNegativoZeroException extends DomainException {
  constructor() {
    super(
      `A saída não pode ser cadastrada com valor zerado ou negativo`,
      HttpStatus.BAD_REQUEST,
    );
  }
}
