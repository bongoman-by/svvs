import { ModuleWithProviders, NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromUser from './+state/user.reducer';
import { UserEffects } from './+state/user.effects';

import {} from './interfaces/user.interface';
import { IUsersStoreOptions } from './interfaces/users-store-options.interface';
import { IUsersApollo } from './interfaces/users-apollo.interface';
import { IUsersFacade } from './interfaces/users-facade.interface';

@NgModule({
  imports: [
    StoreModule.forFeature(fromUser.USER_FEATURE_KEY, fromUser.reducer),
    EffectsModule.forFeature([UserEffects]),
  ],
})
export class UserStoreModule {
  static forRoot(
    options: Partial<IUsersStoreOptions>
  ): ModuleWithProviders<UserStoreModule> {
    return {
      ngModule: UserStoreModule,
      providers: [],
    };
  }
}
