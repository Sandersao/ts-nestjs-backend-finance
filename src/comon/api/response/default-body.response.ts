import { PaginacaoResponse } from "./paginacao.response";

export interface DefaultBodyResponse<T = any[]> {
    status: number
    message: string
    list: T
    paging: PaginacaoResponse
}