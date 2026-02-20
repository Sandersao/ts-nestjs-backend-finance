import { Type } from '@nestjs/common';
import { HealthController } from 'src/module/health/api/health.controller';
import { SaidaController } from 'src/module/saida/api/saida.controller';
import { BootstrapController } from '@src/module/bootstrap/bootstrap.controller';

export const controllerList: Type<any>[] = [
  BootstrapController,
  SaidaController,
  HealthController,
];
