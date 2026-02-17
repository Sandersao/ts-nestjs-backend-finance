import { DomainException } from '@/common/domain/exception/domain.exception';

export class SaidaCreateComValorNegativoZeroException extends DomainException {
  constructor() {
    super(`A saída não pode ser cadastrada com valor zerado ou negativo`);
  }
}
