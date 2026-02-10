import { Type } from "@nestjs/common";
import { SaidaController } from "src/module/saida/api/saida.controller";
import { AppController } from "src/module/saida/old/app.controller";

export const controllerList: Type<any>[] = [
    AppController,
    SaidaController
]