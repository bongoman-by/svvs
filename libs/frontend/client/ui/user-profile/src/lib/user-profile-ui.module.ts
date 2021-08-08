import { NgModule } from '@angular/core';
import { userProfileUiContainers } from './user-profile-ui.common';

@NgModule({
  exports: [...userProfileUiContainers],
  declarations: [...userProfileUiContainers],
})
export class UserProfileUiModule {}
