import { DataSource, DataSourceOptions } from 'typeorm';
import { config } from 'dotenv';
import 'reflect-metadata';

config();

const DBName = 'sqlite';

export const dataSourceOptions: DataSourceOptions = {
  type: DBName,
  database: 'test.sqlite',
  entities: [__dirname + '/**/*.entity.js'],
  migrations: [__dirname + '/migrations/*.js'],
  synchronize: true,
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
