import { UseGuards } from '@nestjs/common';
import { Query, Resolver } from '@nestjs/graphql';
import { CurrentUser } from '../decorators/user.decorator';
import { UserEntity } from '../entities/user.entity';
import { GqlAuthGuard } from '../guards/gql.auth-guard';
import { UserService } from '../services/user.service';

/**
 * UserResolver execute users.graphql query
 */
@Resolver('User')
export class UserResolver {
  /**
   * Inject into UserResolver: UserService
   *
   * @param userService find user from userRepository
   */
  constructor(private readonly userService: UserService) {}
  /**
   * Implement GraphQL Query 'user'
   *
   * @param user provides the user as a candidate for search in userRepository
   */
  @Query('user')
  @UseGuards(GqlAuthGuard)
  async whoIam(@CurrentUser() user: UserEntity) {
    return await this.userService.findOneById(user.id);
  }
}
