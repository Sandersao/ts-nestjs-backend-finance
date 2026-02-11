export class PaginacaoEntity {
    constructor(
        public readonly page: number,
        public readonly perPage: number,
        public readonly total: number,
        public readonly totalPages: number
    ){}
}