import { AppService } from "src/app.service";
import { LimitOffsetCreateUsecase } from "src/comon/domain/usecase/offset-limit-create.usecase";
import { PaginacaoCreateUsecase } from "src/comon/domain/usecase/paginacao-create.usecase";
import { SAIDA_REPOSITORY } from "src/module/saida/application/repository/saida.repository";
import { SaidaApplication } from "src/module/saida/application/saida.appliaciton";
import { SaidaCreateUseCase } from "src/module/saida/application/usecase/saida-create.usecase";
import { SaidaListUseCase } from "src/module/saida/application/usecase/saida-list.usecase";
import { SaidaTypeormRepository } from "src/module/saida/infra/persistence/saida.typeorm-repository";

export const providerList = [
    AppService,
    SaidaListUseCase,
    SaidaCreateUseCase,
    SaidaApplication,
    {
      provide: SAIDA_REPOSITORY,
      useClass: SaidaTypeormRepository,
    },
    LimitOffsetCreateUsecase,
    PaginacaoCreateUsecase,
]