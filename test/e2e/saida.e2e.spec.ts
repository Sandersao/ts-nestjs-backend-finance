import { INestApplication } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import { AppModule } from '@src/app.module';
import { Server } from 'node:http';
import request from 'supertest';
import { DataSource } from 'typeorm';

describe('SaidaController (e2e)', () => {
  let app: INestApplication;
  let server: Server;

  beforeAll(async () => {
    process.env.NODE_ENV = 'test';
    const moduleFixture = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();

    server = app.getHttpServer() as Server;

    const dataSource = app.get(DataSource);
    await dataSource.runMigrations();
  });

  afterAll(async () => {
    const dataSource = app.get(DataSource);

    const entities = dataSource.entityMetadatas;
    for (const entity of entities) {
      const repository = dataSource.getRepository(entity.name);
      await repository.query(`DELETE FROM ${entity.tableName}`);
    }
  });

  it('/saida (POST)', () => {
    return request(server)
      .post('/saida')
      .send({ name: 'Saída de testes', value: 100 })
      .expect(201);
  });

  it('/saida (GET)', () => {
    return request(server).get('/saida?page=0&perPage=10').send().expect(200);
  });

  it('/saida (GET) sem paginação', () => {
    return request(server).get('/saida').send().expect(200);
  });

  it('/saida (GET) sem pagina', () => {
    return request(server).get('/saida?perPage=10').send().expect(200);
  });

  it('/saida (GET) sem per page', () => {
    return request(server).get('/saida?page=0').send().expect(200);
  });
});
