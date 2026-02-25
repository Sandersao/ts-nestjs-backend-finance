import { HttpStatus } from '@nestjs/common';
import { DomainException } from './domain.exception';

export class PaginacaoPageInvalidoException extends DomainException {
  constructor() {
    super(`Page de paginação inválido`, HttpStatus.BAD_REQUEST);
  }
}
