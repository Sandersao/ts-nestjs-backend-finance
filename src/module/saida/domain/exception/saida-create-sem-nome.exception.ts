import { DomainException } from "src/comon/domain/exception/domain.exception";

export class SaidaCreateSemNomeException extends DomainException {
    constructor() {
        super(`A saída não pode ser cadastrada sem nome`)
    }
}