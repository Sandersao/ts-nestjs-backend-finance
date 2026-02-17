import { Saida } from '../../domain/entity/saida';
import { SaidaCreateCommand } from '../dto/saida-create.command';
import { Inject, Injectable } from '@nestjs/common';
import {
  SAIDA_REPOSITORY,
  SaidaRepository,
} from '../../domain/repository/saida.repository';
import { UUID_SERVICE, UuidService } from '../../domain/service/uuid.service';
import { DATE_SERVICE, DateService } from '../../domain/service/date.service';
import { SaidaMapper } from '../mapper/saida.mapper';

@Injectable()
export class SaidaCreateUseCase {
  constructor(
    @Inject(SAIDA_REPOSITORY)
    private readonly repository: SaidaRepository,
    @Inject(UUID_SERVICE)
    private readonly uuidService: UuidService,
    @Inject(DATE_SERVICE)
    private readonly dateService: DateService,
  ) {}

  async execute(command: SaidaCreateCommand) {
    const saida = Saida.create(
      this.uuidService.generate(),
      command.name,
      command.value,
      this.dateService.generate(),
    );

    await this.repository.save(saida);
    return SaidaMapper.toResponse(saida);
  }
}
