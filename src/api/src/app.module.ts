import { Logger, MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MenuModule } from './menu/menu.module';
import { dataSourceOptions } from './typeorm.config';
import { LoggerMiddleware } from './middlewares/logger.middleware';
import { BacketModule } from './backet/backet.module';

@Module({
  imports: [TypeOrmModule.forRoot(dataSourceOptions), MenuModule, BacketModule],
  controllers: [],
  providers: [Logger],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
