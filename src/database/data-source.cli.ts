import { DataSource, DataSourceOptions } from 'typeorm';
import { dataSource } from './data-source';

export const dataSourceClie = new DataSource({
  ...dataSource,
} as DataSourceOptions);
