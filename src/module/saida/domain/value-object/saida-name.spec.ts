import { SaidaName } from "./saida-name";

describe('NomeDaSaida VO', () => {
  it('deve criar nome válido', () => {
    const nome = SaidaName.create('Mercado');
    expect(nome.value).toBe('Mercado');
  });

  it('não deve permitir nome vazio', () => {
    expect(() => {
      SaidaName.create('');
    }).toThrow();
  });
});