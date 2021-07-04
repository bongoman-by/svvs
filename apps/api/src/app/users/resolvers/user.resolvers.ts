import { UseGuards } from '@nestjs/common';
import { Query, Resolver } from '@nestjs/graphql';
import { CurrentUser } from '../decorators/user.decorator';
import { UserEntity } from '../entities/user.entities';
import { GqlAuthGuard } from '../guards/gql.auth-guard';
import { UserService } from '../services/user.service';

@Resolver('User')
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query('user')
  @UseGuards(GqlAuthGuard)
  async whoIam(@CurrentUser() user: UserEntity) {
    return this.userService.findOneById(user.id);
  }
}
