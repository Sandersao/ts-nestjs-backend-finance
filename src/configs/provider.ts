import { AppService } from 'src/old/app.service';
import { SaidaApplication } from 'src/module/saida/application/saida.appliaciton';
import { SaidaCreateUseCase } from 'src/module/saida/application/usecase/saida-create.usecase';
import { SaidaListUseCase } from 'src/module/saida/application/usecase/saida-list.usecase';
import { infraMapList } from './infra';

export const providerList = [
  AppService,
  SaidaListUseCase,
  SaidaCreateUseCase,
  SaidaApplication,
  ...infraMapList,
];
