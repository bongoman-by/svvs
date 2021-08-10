import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import {
  userProfileContainers,
  userProfileRoutes,
} from './user-profile.common';
import { UsersStoreModule } from '@svvs/frontend/shared/data-access/user-store';
import { UserProfileUiModule } from '@svvs/frontend/client/ui/user-profile';

@NgModule({
  imports: [
    UserProfileUiModule,
    UsersStoreModule.forRoot(),
    RouterModule.forChild(userProfileRoutes),
    CommonModule,
  ],
  exports: [...userProfileContainers],
  declarations: [...userProfileContainers],
})
export class UserProfileModule {}
