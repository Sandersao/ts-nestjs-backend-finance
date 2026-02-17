import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Saida } from '../../domain/entity/saida';
import { FindOptionsWhere, Repository } from 'typeorm';
import { SaidaRepository } from '../../domain/repository/saida.repository';
import { SaidaOrmEntity } from '../entity/saida.orm-entity';
import { SaidaMapper } from '../mapper/saida.mapper';

@Injectable()
export class SaidaTypeormRepository implements SaidaRepository {
  constructor(
    @InjectRepository(SaidaOrmEntity)
    private readonly repo: Repository<SaidaOrmEntity>,
  ) {}

  async save(saida: Saida) {
    const ormEntity = this.repo.create({
      uuid: saida.uuid,
      name: saida.name,
      value: saida.value,
      criacaoData: saida.criacao.date,
    });

    return SaidaMapper.toDomain(await this.repo.save(ormEntity));
  }

  async findAll(limit: number, offset: number, name?: string) {
    return (
      await this.repo.find({
        where: this.makeWhere(name),
        skip: offset,
        take: limit,
      })
    ).map((saida) => SaidaMapper.toDomain(saida));
  }

  async count(name?: string) {
    return this.repo.count({ where: this.makeWhere(name) });
  }

  private makeWhere(name?: string) {
    const where: FindOptionsWhere<SaidaOrmEntity> = {};
    if (name) {
      where.name = name;
    }
    return where;
  }
}
