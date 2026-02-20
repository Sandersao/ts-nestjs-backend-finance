import { Test, TestingModule } from '@nestjs/testing';
import { BootstrapService } from '@src/module/bootstrap/bootstrap.service';
import { BootstrapController } from './bootstrap.controller';

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
    it('should return routes', () => {
      const fakeHost = 'fake-host';

      expect(bootstrapController.list(fakeHost)).toBe(
        `<a href="http://${fakeHost}/docs">Docs</a>`,
      );
    });
  });
});
