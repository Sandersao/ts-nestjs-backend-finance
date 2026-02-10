import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dataBaseConnection } from './configs/data-base';
import { controllerList } from './configs/controller';
import { entityList } from './configs/entity';
import { middlewareList } from './configs/middleware';
import { providerList } from './configs/provider';

@Module({
  imports: [TypeOrmModule.forRoot(dataBaseConnection),],
  controllers: controllerList,
  providers: [...entityList, ...providerList],
})
export class AppModule implements NestModule{
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(...middlewareList)
      .forRoutes('*')
  }
}
