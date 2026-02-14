export const DATE_SERVICE = Symbol('DATE_SERVICE');

export abstract class DateService{
    abstract generate(): Date;
}