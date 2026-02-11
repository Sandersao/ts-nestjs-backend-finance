export class PaginacaoCreateCommand {
    constructor(
        public readonly page: number,
        public readonly total: number,
        public readonly perPage: number,
    ){}
}