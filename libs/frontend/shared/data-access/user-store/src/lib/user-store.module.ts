import { ModuleWithProviders, NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromUser from './+state/user.reducer';
import { UserEffects } from './+state/user.effects';
import { UserFacade } from './+state/user.facade';

@NgModule({
  imports: [
    StoreModule.forFeature(fromUser.USER_FEATURE_KEY, fromUser.reducer),
    EffectsModule.forFeature([UserEffects]),
  ],
  providers: [UserFacade],
})
export class UserStoreModule {
  static forRoot(
    options: Partial<IUserStoreOptions>
  ): ModuleWithProviders<UserStoreModule> {
    return {
      ngModule: UserStoreModule,
      providers: [],
    };
  }
}

//Todo remove after
export interface IUserStoreOptions {
  apollo: string;
}
