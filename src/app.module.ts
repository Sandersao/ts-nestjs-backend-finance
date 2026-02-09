import { Module } from '@nestjs/common';
import { AppController } from './controller/app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: ':memory:',   // 👈 banco em memória
      autoLoadEntities: true,
      synchronize: true,      // ⚠️ dev only
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
