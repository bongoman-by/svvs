/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import { BaseLayoutUiComponent } from '@svvs/frontend/ui/components';
import { HomePageUiComponent } from './home-page-ui/home-page-ui.component';
import { Routes } from '@angular/router';

export const homeRoutes: Routes = [
  {
    path: '',
    component: BaseLayoutUiComponent,
    children: [
      {
        path: '',
        component: HomePageUiComponent,
      },
      {
        path: 'auth',
        loadChildren: () =>
          import('@svvs/frontend/client/feature/auth').then(
            (m) => m.AuthModule
          ),
      },
      {
        path: 'user-profile',
        loadChildren: () =>
          import('@svvs/frontend/client/feature/user-profile').then(
            (m) => m.UserProfileModule
          ),
      },
    ],
  },
];

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const homeContainers: any[] = [HomePageUiComponent];
