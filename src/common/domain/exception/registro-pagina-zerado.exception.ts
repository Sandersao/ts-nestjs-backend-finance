import { HttpStatus } from '@nestjs/common';
import { DomainException } from './domain.exception';

export class RegistroPaginaZeradoException extends DomainException {
  constructor() {
    super(
      `Registros por pagina deve ser maior que zero`,
      HttpStatus.BAD_REQUEST,
    );
  }
}
