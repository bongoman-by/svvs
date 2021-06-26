import { Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class AppResolver {
  @Query('test')
  async getData() {
    return 'It`s GraphQL response';
  }
}
