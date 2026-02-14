import { Type } from '@nestjs/common';
import { HealthController } from 'src/module/health/api/health.controller';
import { SaidaController } from 'src/module/saida/api/saida.controller';
import { AppController } from 'src/old/app.controller';

export const controllerList: Type<any>[] = [
  AppController,
  SaidaController,
  HealthController,
];
