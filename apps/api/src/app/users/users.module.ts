import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './entities/user.entity';
import { UserResolver } from './resolvers/user.resolvers';
import { UserService } from './services/user.service';
/**
 * User module contain logic user entity
 */
@Module({
  imports: [TypeOrmModule.forFeature([UserEntity])],
  providers: [UserService, UserResolver],
  exports: [UserService],
})
export class UsersModule {}
