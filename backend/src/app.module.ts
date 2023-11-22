import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { LoggerMiddleware } from './util/logger';
import { EmailService } from './email/email.service';
import { UsersService } from './users/users.service';

import { UsersModule } from './users/users.module';

import { DatabaseModule } from './util/db';
import { EmailModule } from './email/email.module';

@Module({
  controllers: [],
  providers: [EmailService, UsersService],

  imports: [
    ConfigModule.forRoot({
      envFilePath:
        process.env.NODE_ENV === 'production'
          ? '.production.env'
          : process.env.NODE_ENV === 'stage'
          ? '.stage.env'
          : '.development.env',
    }),
    UsersModule,
    DatabaseModule,
    EmailModule,
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('users');
  }
}
