import { IAuthStorage } from './auth-storage.interface';
import { Type } from '@angular/core';

/**
 * Auth-store interface
 */
export interface IAuthStoreOptions {
  /**
   * Auth storage
   */
  storage: Type<IAuthStorage>;
}
