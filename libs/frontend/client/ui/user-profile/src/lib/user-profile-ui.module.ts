import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { userProfileUiContainers } from './user-profile-ui.common';

@NgModule({
  imports: [CommonModule],
  exports: [...userProfileUiContainers],
  declarations: [...userProfileUiContainers],
})
export class UserProfileUiModule {}
