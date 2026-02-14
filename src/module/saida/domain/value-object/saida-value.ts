import { ValueObject } from "src/common/domain/value-object/value-object";
import { SaidaCreateComValorNegativoZeroException } from "../exception/saida-create-com-valor-negativo-zero.exception";

export class SaidaValue extends ValueObject<number> {
    constructor(value: number){
        super(value);
    }

    static create(value: number) {
        if(value === null || value === undefined || value <= 0) {
            throw new SaidaCreateComValorNegativoZeroException();
        }

        return new SaidaValue(value);
    }
}