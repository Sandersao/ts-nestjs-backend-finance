export class LimitOffsetCreateCommand {
    constructor(
        public readonly page: number,
        public readonly perPage: number
    ){}
}