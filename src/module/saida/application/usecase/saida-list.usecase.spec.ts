import { Saida } from '../../domain/entity/saida';
import { SaidaRepository } from '../../domain/repository/saida.repository';
import { SaidaListUseCase } from './saida-list.usecase';

const mock = () => ({
  saidaRepositoryMock: {
    findAll: jest
      .fn()
      .mockReturnValue([
        Saida.create('fake-uuid', 'fake-output', 2.5, new Date('2026-02-13')),
      ]),
    count: jest.fn().mockReturnValue(50),
    save: jest.fn(),
  },
});

describe('SaidaListUseCase', () => {
  it('should list the persited saida list', async () => {
    const { saidaRepositoryMock } = mock();
    const useCase = new SaidaListUseCase(
      saidaRepositoryMock as SaidaRepository,
    );

    const saidaRetornada = await useCase.execute({
      page: 0,
      perPage: 10,
    });

    expect(saidaRepositoryMock.findAll).toHaveBeenCalledTimes(1);
    expect(saidaRepositoryMock.count).toHaveBeenCalledTimes(1);

    expect(saidaRetornada.data[0].uuid).toBe('fake-uuid');
    expect(saidaRetornada.data[0].name).toBe('fake-output');
    expect(saidaRetornada.data[0].value).toBe(2.5);
    expect(saidaRetornada.data[0].ocorrencia.toDateString()).toBe(
      new Date('2026-02-13').toDateString(),
    );

    expect(saidaRetornada.pagination.total).toBe(50);
  });
});
