export interface PaginacaoUseCaseReturn {
  page?: number;
  perPage?: number;
  total?: number;
}

export interface InterfaceUseCaseReturn<T = unknown> {
  message: string;
  data?: T;
  pagination?: PaginacaoUseCaseReturn;
}

export interface Usecase {
  execute();
}
