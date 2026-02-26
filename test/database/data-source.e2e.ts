import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { entityList } from '@src/configs/entity';
import { migrationList } from '@src/configs/migration';
import { join } from 'node:path';

export const E2EDataSource: TypeOrmModuleOptions = {
  type: 'sqlite',
  // database: join(process.cwd(), 'data', 'test.sqlite'),
  database: ':memory:',
  migrations: migrationList,
  entities: entityList,
  synchronize: false,
  logging: false,
};
