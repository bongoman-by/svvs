import { IAuthStorage } from './auth-storage.interface';
import { Type } from '@angular/core';
import { IAuthApollo } from './auth-apollo-interface';
import { IAuthFacade } from './auth-facade.interface';

/**
 * Auth-store interface
 */
export interface IAuthStoreOptions {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  facade: Type<IAuthFacade>;

  /**
   * Auth Apollo
   */
  apollo: Type<IAuthApollo>;

  /**
   * Auth storage
   */
  storage: Type<IAuthStorage>;
}
