import { Observable } from 'rxjs';
import { IUser } from '@svvs/shared/data-access/interfaces';

/**
 * User facade
 */
export abstract class IUsersFacade {
  /**
   * User entity observer
   */
  user$!: Observable<IUser>;
}
