import { Injectable } from "@nestjs/common"
import { InjectRepository } from "@nestjs/typeorm"
import { SaidaEntity } from "../../domain/entity/saida.entity"
import { FindOptionsWhere, Repository } from "typeorm"
import { SaidaRepository } from "../../application/repository/saida.repository"
import { Saida } from "../entity/saida"

@Injectable()
export class SaidaTypeormRepository implements SaidaRepository{
  constructor(
    @InjectRepository(Saida)
    private readonly repo: Repository<SaidaEntity>,
  ) { }

  async save(saida: SaidaEntity): Promise<void> {
    const entity = this.repo.create({
      name: saida.name,
      value: saida.value
    })

    await this.repo.save(entity)
  }

  async findAll(limit: number, offset: number, name?: string): Promise<SaidaEntity[]> {
    return (await this.repo.findAndCount({where: this.makeWhere(name), skip: offset, take: limit}))[0]
  }

  async count(name?: string){
    return this.repo.count({where: this.makeWhere(name)})
  }

  private makeWhere(name?: string){
    const where: FindOptionsWhere<SaidaEntity> = {}
    if(name) {
      where.name = name;
    }
    return where;
  }
}
