import { HomePageUiComponent } from './home-page-ui/home-page-ui.component';
import { Routes } from '@angular/router';

export const homeRoutes: Routes = [
  {
    path: '',
    component: HomePageUiComponent,
  },
];

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const homeContainers: any[] = [HomePageUiComponent];
