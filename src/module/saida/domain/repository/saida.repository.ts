import { SaidaEntity } from "../entity/saida.entity"

export interface SaidaRepository {
  save(saida: SaidaEntity): Promise<void>
  findAll(name?: string, value?: number): Promise<SaidaEntity[]>
}