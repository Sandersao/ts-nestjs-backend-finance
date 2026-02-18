import { SaidaNameVo } from './saida-name.vo';

describe('NomeDaSaida VO', () => {
  it('deve criar nome válido', () => {
    const nome = SaidaNameVo.create('Mercado');
    expect(nome.value).toBe('Mercado');
  });

  it('não deve permitir nome vazio', () => {
    expect(() => {
      SaidaNameVo.create('');
    }).toThrow();
  });
});
