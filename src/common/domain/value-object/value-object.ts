export abstract class ValueObject<T> {
  protected readonly _value: T;

  protected constructor(value: T) {
    this._value = value;
  }

  get value(): T {
    return this._value;
  }

  equals(vo?: ValueObject<T>): boolean {
    if (!vo) return false;
    return JSON.stringify(this._value) === JSON.stringify(vo._value);
  }
}
