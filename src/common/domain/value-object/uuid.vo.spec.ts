import { UuidVo } from './uuid.vo';

describe('UuidVO', () => {
  it('deve criar uuid válido', () => {
    const nome = UuidVo.create('Mercado');
    expect(nome.value).toBe('Mercado');
  });
});
