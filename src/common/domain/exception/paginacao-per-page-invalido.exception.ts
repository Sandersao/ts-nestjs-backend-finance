import { HttpStatus } from '@nestjs/common';
import { DomainException } from './domain.exception';

export class PaginacaoPerPageInvalidoException extends DomainException {
  constructor() {
    super(`Per page de paginação inválido`, HttpStatus.BAD_REQUEST);
  }
}
