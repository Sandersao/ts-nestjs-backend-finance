import { SAIDA_REPOSITORY } from '@src/module/saida/domain/repository/saida.repository';
import { DATE_SERVICE } from '@src/module/saida/domain/service/date.service';
import { UUID_SERVICE } from '@src/module/saida/domain/service/uuid.service';
import { SaidaTypeormRepository } from '@src/module/saida/infra/persistence/saida.typeorm-repository';
import { DateInfraService } from '@src/module/saida/infra/service/date.infa-service';
import { UuidInfraService } from '@src/module/saida/infra/service/uuid.infra-service';

export const infraMapList = [
  { provide: SAIDA_REPOSITORY, useClass: SaidaTypeormRepository },
  { provide: UUID_SERVICE, useClass: UuidInfraService },
  { provide: DATE_SERVICE, useClass: DateInfraService },
];
