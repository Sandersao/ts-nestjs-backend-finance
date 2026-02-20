import { Saida } from '../../domain/entity/saida';
import { SaidaListUseCase } from './saida-list.usecase';

describe('SaidaListUseCase', () => {
  it('should list the persited saida list', async () => {
    const repositoryMock = {
      findAll: jest
        .fn()
        .mockReturnValue([
          Saida.create('fake-uuid', 'fake-output', 2.5, new Date('2026-02-13')),
        ]),
      count: jest.fn().mockReturnValue(50),
    };

    const useCase = new SaidaListUseCase(repositoryMock as any);

    const saidaRetornada = await useCase.execute({
      page: 0,
      perPage: 10,
    });

    expect(repositoryMock.findAll).toHaveBeenCalledTimes(1);
    expect(repositoryMock.count).toHaveBeenCalledTimes(1);

    expect(saidaRetornada.data[0].uuid).toBe('fake-uuid');
    expect(saidaRetornada.data[0].name).toBe('fake-output');
    expect(saidaRetornada.data[0].value).toBe(2.5);
    expect(saidaRetornada.data[0].criacao.date.toDateString()).toBe(
      new Date('2026-02-13').toDateString(),
    );

    expect(saidaRetornada.pagination.total).toBe(50);
  });
});
