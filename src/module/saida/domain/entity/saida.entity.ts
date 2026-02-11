import { SaidaCreateComValorNegativoZeroException } from "../exception/saida-create-com-valor-negativo-zero.exception"
import { SaidaCreateSemNomeException } from "../exception/saida-create-sem-nome.exception"
import { SaidaCreateSemValorException } from "../exception/saida-create-sem-valor.exception"

export class SaidaEntity {
  constructor(
    public name: string,
    public value: number,
  ) {}

  static create(name: string, value: number) {
    if (!name) {
      throw new SaidaCreateSemNomeException()
    }

    if (!value) {
      throw new SaidaCreateSemValorException()
    }

    if (value <= 0) {
      throw new SaidaCreateComValorNegativoZeroException()
    }

    return new SaidaEntity(name, value)
  }
}
