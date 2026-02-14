export const UUID_SERVICE = Symbol('UUID_SERVICE');

export abstract class UuidService {
    abstract generate(): string
}