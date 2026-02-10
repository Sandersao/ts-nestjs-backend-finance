import { Provider } from "@nestjs/common";
import { AppService } from "src/app.service";

export const entityList: Provider<any>[] = [
    AppService
]