import { SaidaCreateUseCase } from './saida-create.usecase';

describe('SaidaCreateUseCase', () => {
  it('should create a saida and save it', async () => {
    const repositoryMock = {
      save: jest.fn(),
    };

    const uuidServiceMock = {
      generate: jest.fn().mockReturnValue('fake-string'),
    };

    const dateServiceMock = {
      generate: jest.fn().mockReturnValue(new Date('2026-02-13')),
    };

    const useCase = new SaidaCreateUseCase(
      repositoryMock as any,
      uuidServiceMock as any,
      dateServiceMock as any,
    );

    const saidaPersistda = await useCase.execute({
      name: 'Despesa',
      value: 2.5,
    });

    expect(uuidServiceMock.generate).toHaveBeenCalledTimes(1);
    expect(dateServiceMock.generate).toHaveBeenCalledTimes(1);
    expect(repositoryMock.save).toHaveBeenCalledTimes(1);

    expect(saidaPersistda.uuid).toBe('fake-string');
    expect(saidaPersistda.name).toBe('Despesa');
    expect(saidaPersistda.value).toBe(2.5);
    expect(saidaPersistda.ocorrencia.toDateString()).toBe(
      new Date('2026-02-13').toDateString(),
    );
  });
});
