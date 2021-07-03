import { Resolver } from '@nestjs/graphql';
import { CurrentUser } from '../decorators/user.decorator';
import { UserEntity } from '../entities/user.entities';
import { UserService } from '../services/user.service';

@Resolver('User')
export class UserResolver {
  constructor(private readonly userService: UserService) {}
  async whoIam(@CurrentUser() user: UserEntity) {
    return this.userService.findOneById(user.id);
  }
}
