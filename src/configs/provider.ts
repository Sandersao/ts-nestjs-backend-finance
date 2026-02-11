import { AppService } from "src/app.service";
import { SAIDA_REPOSITORY } from "src/module/saida/application/repository/saida.repository";
import { SaidaCreateUseCase } from "src/module/saida/application/usecase/saida-create.usecase";
import { SaidaListUseCase } from "src/module/saida/application/usecase/saida-list.usecase";
import { SaidaTypeormRepository } from "src/module/saida/infra/persistence/saida.typeorm-repository";

export const providerList = [
    AppService,
    SaidaListUseCase,
    SaidaCreateUseCase,
    {
      provide: SAIDA_REPOSITORY,
      useClass: SaidaTypeormRepository,
    },
]