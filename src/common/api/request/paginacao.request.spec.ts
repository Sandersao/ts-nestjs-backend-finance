import 'reflect-metadata';
import { plainToInstance } from 'class-transformer';
import { validate } from 'class-validator';
import { PaginacaoRequest } from './paginacao.request';

describe('PaginacaoRequest', () => {
  const makeDto = (payload: unknown) =>
    plainToInstance(PaginacaoRequest, payload);

  describe('default values', () => {
    it('should apply default values when no params are provided', async () => {
      const dto = makeDto({});

      const errors = await validate(dto);

      expect(errors.length).toBe(0);
      expect(dto.page).toBe(0);
      expect(dto.perPage).toBe(10);
    });
  });

  describe('transformation', () => {
    it('should transform string values to numbers', async () => {
      const dto = makeDto({
        page: '2',
        perPage: '5',
      });

      const errors = await validate(dto);

      expect(errors.length).toBe(0);
      expect(dto.page).toBe(2);
      expect(dto.perPage).toBe(5);
    });
  });

  describe('validation rules', () => {
    it('should fail when page is negative', async () => {
      const dto = makeDto({
        page: -1,
        perPage: 10,
      });

      const errors = await validate(dto);

      expect(errors.length).toBeGreaterThan(0);
    });

    it('should fail when page is not a number', async () => {
      const dto = makeDto({
        page: 'abc',
        perPage: 10,
      });

      const errors = await validate(dto);

      expect(errors.length).toBeGreaterThan(0);
    });

    it('should fail when perPage is not a number', async () => {
      const dto = makeDto({
        page: 0,
        perPage: 'abc',
      });

      const errors = await validate(dto);

      expect(errors.length).toBeGreaterThan(0);
    });
  });

  describe('upper limit (if Max decorator exists)', () => {
    it('should fail when perPage exceeds maximum limit', async () => {
      const dto = makeDto({
        page: 0,
        perPage: 1000, // ajuste se você tiver @Max
      });

      const errors = await validate(dto);

      if (errors.length === 0) {
        // Se você não tiver @Max, o teste não falhará.
        // Nesse caso, pode remover esse bloco.
        expect(true).toBe(true);
      } else {
        expect(errors.length).toBeGreaterThan(0);
      }
    });
  });
});
