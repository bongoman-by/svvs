import { Routes } from '@angular/router';
import { AuthUiComponent } from './auth-ui/auth-ui.component';

export const authRoutes: Routes = [
  {
    path: '',
    component: AuthUiComponent,
  },
];

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const authContainers: any[] = [AuthUiComponent];
