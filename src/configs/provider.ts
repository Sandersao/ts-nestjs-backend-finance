import { SaidaCreateUseCase } from '@src/module/saida/application/usecase/saida-create.usecase';
import { SaidaListUseCase } from '@src/module/saida/application/usecase/saida-list.usecase';
import { infraMapList } from './infra';
import { BootstrapService } from '@src/module/bootstrap/bootstrap.service';

export const providerList = [
  BootstrapService,
  SaidaListUseCase,
  SaidaCreateUseCase,
  ...infraMapList,
];
