export class SaidaResponse {
    constructor(
        public uuid: string,
        public name: string,
        public value: number,
        public ocorrencia: Date
    ){}
}