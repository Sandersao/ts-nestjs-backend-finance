import { CriacaoVo } from './criacao.vo';
import { UuidVo } from './uuid.vo';

describe('CriacaoVO', () => {
  it('deve criar registro de criação válido', () => {
    const uuid = 'fakeUUID';
    const criacao = CriacaoVo.create(new Date('2025-10-10'), uuid);
    expect(criacao.date.toDateString()).toBe(
      new Date('2025-10-10').toDateString(),
    );
    expect(criacao.user?.value).toBe(UuidVo.create('fakeUUID').value);
  });

  it('deve criar registro de criação válido', () => {
    const uuid = 'fakeUUID2';
    const criacao = CriacaoVo.create(new Date('2025-10-12'), uuid);
    expect(criacao.date.toDateString()).toBe(
      new Date('2025-10-12').toDateString(),
    );
    expect(criacao.user?.value).toBe(UuidVo.create('fakeUUID2').value);
  });
});
