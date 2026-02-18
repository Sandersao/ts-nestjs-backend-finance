import { ValueObject } from './value-object';

class VoNumber extends ValueObject<number> {
  constructor(value: number) {
    super(value);
  }
  static create(value: number) {
    return new VoNumber(value);
  }
}

class VoString extends ValueObject<string> {
  constructor(value: string) {
    super(value);
  }
  static create(value: string) {
    return new VoString(value);
  }
}

class VoArray extends ValueObject<string[]> {
  constructor(value: string[]) {
    super(value);
  }
  static create(value: string[]) {
    return new VoArray(value);
  }
}

class VoObject extends ValueObject<{ test: string }> {
  constructor(value: { test: string }) {
    super(value);
  }
  static create(value: { test: string }) {
    return new VoObject(value);
  }
}

describe('ValueObject', () => {
  it('deve criar value object com inteiro 2', () => {
    const nome = VoNumber.create(2);
    expect(nome.value).toBe(2);
  });

  it('deve criar value object com inteiro 3', () => {
    const nome = VoNumber.create(3);
    expect(nome.value).toBe(3);
  });

  it('deve criar value object com inteiro 53', () => {
    const nome = VoNumber.create(3);
    expect(nome.value).toBe(3);
  });

  it('deve criar value object com float 2.5', () => {
    const nome = VoNumber.create(2.5);
    expect(nome.value).toBe(2.5);
  });

  it('deve criar value object com float 2.75', () => {
    const nome = VoNumber.create(2.75);
    expect(nome.value).toBe(2.75);
  });

  it('deve criar value object com float 2.85465354', () => {
    const nome = VoNumber.create(2.85465354);
    expect(nome.value).toBe(2.85465354);
  });

  it('deve criar value object com float 2.45613513548654', () => {
    const nome = VoNumber.create(2.45613513548654);
    expect(nome.value).toBe(2.45613513548654);
  });

  it('deve criar value object com float 54.45613513548654', () => {
    const nome = VoNumber.create(54.45613513548654);
    expect(nome.value).toBe(54.45613513548654);
  });

  it('deve criar value object com string "Batata"', () => {
    const nome = VoString.create('Batata');
    expect(nome.value).toBe('Batata');
  });

  it('deve criar value object com string "Mestre"', () => {
    const nome = VoString.create('Mestre');
    expect(nome.value).toBe('Mestre');
  });

  it('deve criar value object com string "Aprendendo"', () => {
    const nome = VoString.create('Aprendendo');
    expect(nome.value).toBe('Aprendendo');
  });

  it('deve criar value object com string ["Aprendendo", "Mestre", "Batata"]', () => {
    const nome = VoArray.create(['Aprendendo', 'Mestre', 'Batata', 'Testes']);

    expect(JSON.stringify(nome.value)).toBe(
      JSON.stringify(['Aprendendo', 'Mestre', 'Batata', 'Testes']),
    );
  });

  it('deve criar value object com object {test: string} "Batata"', () => {
    const nome = VoObject.create({ test: 'Batata' });
    expect(JSON.stringify(nome.value)).toBe(JSON.stringify({ test: 'Batata' }));
  });

  it('deve criar value object com object {test: string} "Testes"', () => {
    const nome = VoObject.create({ test: 'Testes' });
    expect(JSON.stringify(nome.value)).toBe(JSON.stringify({ test: 'Testes' }));
  });
});
