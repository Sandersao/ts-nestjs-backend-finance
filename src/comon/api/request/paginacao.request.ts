import { ApiProperty } from "@nestjs/swagger"
import { Type } from "class-transformer"
import { IsNotEmpty, IsNumber } from "class-validator"

export class PaginacaoRequest {
    @ApiProperty({required: true, default: 0})
    @IsNotEmpty()
    @Type(() => Number)
    @IsNumber()
    page: number = 0

    @ApiProperty({required: true, default: 10})
    @IsNotEmpty()
    @Type(() => Number)
    @IsNumber()
    perPage: number = 10
}