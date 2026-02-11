import { PaginacaoResponse } from "./paginacao.response";

export interface ApiResponse<T> {
  code: number;
  message: string;
  data?: T;
  pagination?: PaginacaoResponse;
}