import { SaidaCreateUseCase } from "src/module/saida/application/usecase/saida-create.usecase";
import { SaidaListUseCase } from "src/module/saida/application/usecase/saida-list.usecase";

export const providerList = [
    SaidaListUseCase,
    SaidaCreateUseCase
]