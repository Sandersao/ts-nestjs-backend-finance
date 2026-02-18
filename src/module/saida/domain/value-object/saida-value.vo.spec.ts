import { SaidaValueVo } from './saida-value.vo';

describe('ValorDaSaida VO', () => {
  it('deve criar valor válido', () => {
    const valor = SaidaValueVo.create(2.5);
    expect(valor.value).toBe(2.5);
  });

  it('não deve permitir valor 0', () => {
    expect(() => {
      SaidaValueVo.create(0);
    }).toThrow();
  });

  it('não deve permitir valor negativo', () => {
    expect(() => {
      SaidaValueVo.create(-0.000000001);
    }).toThrow();
  });
});
