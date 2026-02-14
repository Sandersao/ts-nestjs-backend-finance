import { Saida } from '../entity/saida';

export const SAIDA_REPOSITORY = Symbol('SAIDA_REPOSITORY');

export abstract class SaidaRepository {
  abstract count(name?: string): Promise<number>;
  abstract findAll(limit: number, offset: number, name?: string): Promise<Saida[]>;
  abstract save(saida: Saida): Promise<Saida>;
}
