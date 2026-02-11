import { Type } from "class-transformer"
import { IsNotEmpty, IsNumber } from "class-validator"

export class PaginacaoRequest {
    @IsNotEmpty()
    @Type(() => Number)
    @IsNumber()
    page: number

    @IsNotEmpty()
    @Type(() => Number)
    @IsNumber()
    perPage: number
}