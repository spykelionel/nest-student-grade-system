import * as dotenv from 'dotenv';
import { DataSource, DataSourceOptions } from 'typeorm';

dotenv.config();

const { username, password, database } = process.env;
export const dataSourceOptions: DataSourceOptions = {
  type: 'mysql',
  host: 'localhost',
  username,
  password,
  database,
  entities: ['dist/**/*.entity.js'],
  migrations: ['dist/db/migrations/*.js'],
};

const dataSource = new DataSource(dataSourceOptions);

export default dataSource;
