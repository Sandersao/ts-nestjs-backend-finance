import { Injectable } from "@nestjs/common"
import { SaidaRepository } from "../../domain/repository/saida.repository"
import { InjectRepository } from "@nestjs/typeorm"
import { SaidaEntity } from "../../domain/entity/saida.entity"
import { Repository } from "typeorm"

@Injectable()
export class SaidaTypeormRepository implements SaidaRepository {
  constructor(
    @InjectRepository(SaidaEntity)
    private readonly repo: Repository<SaidaEntity>,
  ) { }

  async save(saida: SaidaEntity): Promise<void> {
    const entity = this.repo.create({
      name: saida.name,
      value: saida.value
    })

    await this.repo.save(entity)
  }

  async findAll(): Promise<SaidaEntity[]> {
    return this.repo.find()
  }
}
