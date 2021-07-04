import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { AppController } from './app.controller';

import { TypeOrmModule } from '@nestjs/typeorm';
import { environment } from '../environments/environment';
import { resolverMap } from './app.resolver';
import { UserEntity } from './users/entities/user.entities';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      ...environment.connection,
      entities: [UserEntity],
    }),
    GraphQLModule.forRoot({
      typePaths: ['./**/*.graphql'],
      context: ({ req }) => ({ req }),
      playground: true,
      resolvers: [resolverMap],
    }),
    UsersModule,
    AuthModule,
  ],
  controllers: [AppController],
})
export class AppModule {}
