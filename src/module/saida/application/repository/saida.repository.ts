import { SaidaEntity } from "../../domain/entity/saida.entity";

export const SAIDA_REPOSITORY = Symbol('SAIDA_REPOSITORY')

export abstract class SaidaRepository {
    abstract findAll(limit: number, offset: number, name: string): Promise<SaidaEntity[]>
    abstract save(saida: SaidaEntity)
}