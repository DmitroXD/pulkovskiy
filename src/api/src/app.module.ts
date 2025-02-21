import { Logger, MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MenuModule } from './menu/menu.module';
import { dataSourceOptions } from './typeorm.config';
import { LoggerMiddleware } from './middlewares/logger.middleware';

@Module({
  imports: [TypeOrmModule.forRoot(dataSourceOptions), MenuModule],
  controllers: [],
  providers: [Logger],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
