import { USERS_FEATURE_KEY } from '../+state/user.reducer';
import { IUsersState } from './users-state.interface';

export interface IUsersStoreFeatureKey {
  readonly [USERS_FEATURE_KEY]: IUsersState;
}
