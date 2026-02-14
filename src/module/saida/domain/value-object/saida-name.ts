import { ValueObject } from "src/common/domain/value-object/value-object";
import { SaidaCreateComNomeSomenteCharsVaziosException } from "../exception/saida-create-com-nome-somente-chars-vazios.exception";

export class SaidaName extends ValueObject<string> {
    constructor(value: string){
        super(value);
    }

    static create(name: string) {
        if(!name || name.trim().length === 0) {
            throw new SaidaCreateComNomeSomenteCharsVaziosException();
        }

        return new SaidaName(name.trim());
    }
}