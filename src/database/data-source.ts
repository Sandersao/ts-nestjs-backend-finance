import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { entityList } from '@src/configs/entity';
import { migrationList } from '@src/configs/migration';
import { join } from 'path';

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

export const dataSource: TypeOrmModuleOptions = {
  type: 'sqlite',
  // database: ':memory:',
  database: join(process.cwd(), 'data', 'database.sqlite'),
  entities: entityList,
  migrations: migrationList,
  synchronize: false,
  logging: false,
};
