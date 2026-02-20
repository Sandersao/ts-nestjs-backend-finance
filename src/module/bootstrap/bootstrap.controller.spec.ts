import { Test, TestingModule } from '@nestjs/testing';
import { BootstrapService } from '@src/module/bootstrap/bootstrap.service';
import { BootstrapController } from './bootstrap.controller';
import { Request } from 'express';

describe('BootstrapController', () => {
  let bootstrapController: BootstrapController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [BootstrapController],
      providers: [BootstrapService],
    }).compile();

    bootstrapController = app.get<BootstrapController>(BootstrapController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(bootstrapController.list({} as Request)).toBe('Hello World!');
    });
  });
});
