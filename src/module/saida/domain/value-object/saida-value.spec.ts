import { SaidaValue } from "./saida-value";

describe('ValorDaSaida VO', () => {
  it('deve criar valor válido', () => {
    const valor = SaidaValue.create(2.5);
    expect(valor.value).toBe(2.5);
  });

  it('não deve permitir valor 0', () => {
    expect(() => {
      SaidaValue.create(0);
    }).toThrow();
  });

  it('não deve permitir valor negativo', () => {
    expect(() => {
      SaidaValue.create(-0.000000001);
    }).toThrow();
  });
});
