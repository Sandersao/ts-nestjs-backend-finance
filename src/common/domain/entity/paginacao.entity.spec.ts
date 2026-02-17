import { makePaginacao } from '@test/factory/make-paginacao';

describe('Paginacao domain entity', () => {
  it('Deve criar a paginação, 1º pagina, 10 registros por pagina e total de 18 registros', () => {
    const paginacao = makePaginacao({ page: 0, perPage: 10 });
    paginacao.total = 18;
    expect(paginacao.page).toBe(0);
    expect(paginacao.perPage).toBe(10);
    expect(paginacao.offset).toBe(0);
    expect(paginacao.limit).toBe(10);
    expect(paginacao.currentPerPage).toBe(10);
  });

  it('Deve criar a paginação, 2º pagina, 10 registros por pagina e total de 18 registros', () => {
    const paginacao = makePaginacao({ page: 1, perPage: 10 });
    paginacao.total = 18;
    expect(paginacao.page).toBe(1);
    expect(paginacao.perPage).toBe(10);
    expect(paginacao.offset).toBe(10);
    expect(paginacao.limit).toBe(10);
    expect(paginacao.currentPerPage).toBe(8);
  });

  it('Deve criar a paginação, 3º pagina, 10 registros por pagina e total de 18 registros', () => {
    const paginacao = makePaginacao({ page: 2, perPage: 10 });
    paginacao.total = 32;
    expect(paginacao.page).toBe(2);
    expect(paginacao.perPage).toBe(10);
    expect(paginacao.offset).toBe(20);
    expect(paginacao.limit).toBe(10);
    expect(paginacao.currentPerPage).toBe(10);
  });

  it('Deve criar a paginação, 4º pagina, 10 registros por pagina e total de 18 registros', () => {
    const paginacao = makePaginacao({ page: 3, perPage: 10 });
    paginacao.total = 32;
    expect(paginacao.page).toBe(3);
    expect(paginacao.perPage).toBe(10);
    expect(paginacao.offset).toBe(30);
    expect(paginacao.limit).toBe(10);
    expect(paginacao.currentPerPage).toBe(2);
  });
});
