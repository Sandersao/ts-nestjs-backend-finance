import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { entityList } from '@src/configs/entity';
import { migrationList } from '@src/configs/migration';
import { join } from 'node:path';

export const dataSource: TypeOrmModuleOptions = {
  type: 'sqlite',
  database: join(process.cwd(), 'data', 'database.sqlite'),
  entities: entityList,
  migrations: migrationList,
  synchronize: false,
  logging: false,
};
