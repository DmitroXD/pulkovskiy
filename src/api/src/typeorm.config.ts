import { DataSource, DataSourceOptions } from 'typeorm';
import { config } from 'dotenv';
import 'reflect-metadata';
import settings from './config';

config();

const DBName = 'mysql';

export const dataSourceOptions: DataSourceOptions = {
  type: DBName,
  database: settings.MYSQL_DNS,
  entities: [__dirname + '/**/*.entity.js'],
  migrations: [__dirname + '/migrations/*.js'],
  synchronize: false,
  logging: true,
};

const AppDataSource = new DataSource(dataSourceOptions);

AppDataSource.initialize()
  .then(() => {
    console.log('Data Source has been initialized!');
  })
  .catch((err: any) => {
    console.error('Error during Data Source initialization', err);
  });

export default AppDataSource;
