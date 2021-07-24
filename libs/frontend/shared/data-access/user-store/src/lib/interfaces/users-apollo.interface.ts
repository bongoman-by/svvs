import { IUser, TApolloResponse } from '@svvs/shared/data-access/interfaces';

/**
 * User Apollo
 */
export abstract class IUsersApollo {
  /**
   * Load current user
   */
  abstract loadUser(
    queryParams?: Record<string, unknown>
  ): TApolloResponse<IUser>;
}
