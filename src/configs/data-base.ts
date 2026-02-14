import { TypeOrmModuleOptions } from '@nestjs/typeorm';

// export const dataBaseConnection: TypeOrmModuleOptions = {
//   type: 'postgres',
//   host: 'localhost',
//   port: 5432,
//   username: 'postgres',
//   password: 'postgres',
//   database: 'test',
//   // synchronize: true,
//   logging: false,
//   entities: entityList
// }

export const dataBaseConnection: TypeOrmModuleOptions = {
  type: 'sqlite',
  database: ':memory:',
  autoLoadEntities: true,
  synchronize: true,
  logging: false,
};
