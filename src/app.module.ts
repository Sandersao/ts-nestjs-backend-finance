import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dataSource } from '@src/database/data-source';
import { controllerList } from '@src/configs/controller';
import { entityList } from '@src/configs/entity';
import { middlewareList } from '@src/configs/middleware';
import { providerList } from '@src/configs/provider';
import { E2EDataSource } from '@test/database/data-source.e2e';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: () =>
        process.env.NODE_ENV === 'test' ? E2EDataSource : dataSource,
    }),
    TypeOrmModule.forFeature(entityList),
  ],
  controllers: controllerList,
  providers: [...entityList, ...providerList],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(...middlewareList).forRoutes('*');
  }
}
