import { Test } from '@nestjs/testing';
import { SaidaController } from './saida.controller';
import { SaidaCreateUseCase } from '../application/usecase/saida-create.usecase';
import { SaidaListUseCase } from '../application/usecase/saida-list.usecase';
import { SaidaListRequest } from './request/saida-list.requests';
import { SaidaResponse } from './response/saida.response';
import { PaginacaoEntity } from '@src/common/domain/entity/paginacao.entity';

describe('SaidaController', () => {
  let controller: SaidaController;
  let createUseCase: SaidaCreateUseCase;
  let listUseCase: SaidaListUseCase;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      controllers: [SaidaController],
      providers: [
        {
          provide: SaidaCreateUseCase,
          useValue: {
            execute: jest.fn(),
          },
        },
        {
          provide: SaidaListUseCase,
          useValue: {
            execute: jest.fn(),
          },
        },
      ],
    }).compile();

    controller = module.get(SaidaController);
    createUseCase = module.get(SaidaCreateUseCase);
    listUseCase = module.get(SaidaListUseCase);
  });

  it('should create the saída', async () => {
    const request = { name: 'Despesa de testes', value: 2.5 };
    const response = {
      uuid: 'fake-uuid',
      name: 'Despesa de testes',
      value: 2.5,
      ocorrencia: new Date(),
    };

    const executionSpy = jest
      .spyOn(createUseCase, 'execute')
      .mockResolvedValue(response);

    const result = await controller.create(request);

    expect(executionSpy).toHaveBeenCalledWith(request);
    expect(result).toEqual(response);
  });

  it('should list the saída', async () => {
    const request = { page: 0, perPage: 10 } as SaidaListRequest;
    const response = {
      data: [
        new SaidaResponse('fake-uuid', 'Despesa de testes', 2.5, new Date()),
        new SaidaResponse('fake-uuid-2', 'Despesa de testes', 2.5, new Date()),
      ],
      pagination: PaginacaoEntity.create(request.page, request.perPage),
    };

    const executionSpy = jest
      .spyOn(listUseCase, 'execute')
      .mockResolvedValue(response);

    const result = await controller.findAll(request);

    expect(executionSpy).toHaveBeenCalledWith(request);
    expect(result).toEqual(response);
  });
});
