export class SaidaEntity {
  constructor(
    public readonly name: string,
    public readonly value: number,
  ) {}

  static create(name: string, value: number) {
    if (!name) {
      throw new Error('Nome obrigatório')
    }

    if (!value) {
      throw new Error('Valor obrigatório')
    }

    if (value <= 0) {
      throw new Error('Valor deve ser superior a zero')
    }

    return new SaidaEntity(name, value)
  }
}
