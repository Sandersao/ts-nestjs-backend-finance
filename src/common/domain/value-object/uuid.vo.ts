import { ValueObject } from "src/common/domain/value-object/value-object";

export class UuidVo extends ValueObject<string> {
    constructor(value: string){
        super(value);
    }

    static create(uuid: string) {
        return new UuidVo(uuid.trim());
    }
}