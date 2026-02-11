import { DomainException } from "src/comon/domain/exception/domain.exception";

export class SaidaCreateSemValorException extends DomainException {
    constructor() {
        super(`O valor para a saída deve ser especificado`)
    }
}