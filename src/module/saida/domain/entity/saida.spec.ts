import { makeSaida } from '@test/factory/make-saida';
import { randomUUID } from 'node:crypto';

describe('Saída domain entity', () => {
  it('deve criar uma saída válida', () => {
    const newUuuid = randomUUID();
    const saida = makeSaida({
      uuid: newUuuid,
      name: 'Testes',
      value: 2.5,
      date: new Date('2015-02-10'),
    });

    expect(saida.uuid).toBe(newUuuid);
    expect(saida.name).toBe('Testes');
    expect(saida.value).toBe(2.5);
    expect(saida.criacao.date.toDateString()).toBe(
      new Date('2015-02-10').toDateString(),
    );
  });
});
