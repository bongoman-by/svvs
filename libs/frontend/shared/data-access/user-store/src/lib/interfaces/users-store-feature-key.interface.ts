import { USERS_FEATURE_KEY } from '../+state/users.reducer';
import { IUsersState } from './users-state.interface';

export interface IUsersStoreFeatureKey {
  readonly [USERS_FEATURE_KEY]: IUsersState;
}
