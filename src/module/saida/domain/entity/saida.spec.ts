import { makeSaida } from '@test/factory/make-saida';

describe('Saída domain entity', () => {
  it('deve criar uma saída válida', () => {
    const saida = makeSaida({ name: 'Testes', value: 2.5 });

    expect(saida.name).toBe('Testes');
    expect(saida.value).toBe(2.5);
  });
});
