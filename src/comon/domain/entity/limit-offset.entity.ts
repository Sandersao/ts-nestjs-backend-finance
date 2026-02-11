export class LimitOffsetEntity {
    constructor(
        public readonly limit: number,
        public readonly offset: number
    ){}
}