import { Routes } from '@angular/router';
import { UserProfileUiComponent } from './user-profile-ui/user-profile-ui.component';

export const userProfileRoutes: Routes = [
  {
    path: '',
    component: UserProfileUiComponent,
  },
];

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const userProfileContainers: any[] = [UserProfileUiComponent];
