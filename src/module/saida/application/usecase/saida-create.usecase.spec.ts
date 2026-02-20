import { SaidaCreateUseCase } from './saida-create.usecase';

const mock = () => ({
  saidaRepositoryMock: {
    findAll: jest.fn(),
    count: jest.fn(),
    save: jest.fn(),
  },

  dateServiceMock: {
    generate: jest.fn().mockReturnValue(new Date('2026-02-13')),
  },

  uuidServiceMock: {
    generate: jest.fn().mockReturnValue('fake-string'),
  },
});

describe('SaidaCreateUseCase', () => {
  it('should create a saida and save it', async () => {
    const { saidaRepositoryMock, dateServiceMock, uuidServiceMock } = mock();

    const useCase = new SaidaCreateUseCase(
      saidaRepositoryMock,
      uuidServiceMock,
      dateServiceMock,
    );

    const saidaPersistda = await useCase.execute({
      name: 'Despesa',
      value: 2.5,
    });

    expect(uuidServiceMock.generate).toHaveBeenCalledTimes(1);
    expect(dateServiceMock.generate).toHaveBeenCalledTimes(1);
    expect(saidaRepositoryMock.save).toHaveBeenCalledTimes(1);

    expect(saidaPersistda.uuid).toBe('fake-string');
    expect(saidaPersistda.name).toBe('Despesa');
    expect(saidaPersistda.value).toBe(2.5);
    expect(saidaPersistda.ocorrencia.toDateString()).toBe(
      new Date('2026-02-13').toDateString(),
    );
  });
});
