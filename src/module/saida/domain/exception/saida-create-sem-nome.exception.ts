import { DomainException } from "../../../../comon/application/domain/exception/domain.exception";

export class SaidaCreateSemNomeException extends DomainException {
    constructor() {
        super(`A saída não pode ser cadastrada sem nome`)
    }
}