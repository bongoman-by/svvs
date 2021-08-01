import { Routes } from '@angular/router';
import { AppComponent } from './components/app/app.component';

export const corRoutes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('@svvs/frontend/client/feature/home').then((m) => m.HomeModule),
  },
];

export const coreContainers: any[] = [AppComponent];
