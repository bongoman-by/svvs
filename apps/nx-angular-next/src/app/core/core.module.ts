import { NxModule } from '@nrwl/angular';
import { NgModule } from '@angular/core';
import { HttpLink } from 'apollo-angular/http';
import { APOLLO_OPTIONS } from 'apollo-angular';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';

import { createApollo } from './utils/create-apollo';
import { RootStoreModule } from '@svvs/frontend/shared/data-access/root-store';
import { coreContainers, corRoutes } from './core.common';

@NgModule({
  declarations: [coreContainers],
  imports: [
    NxModule.forRoot(),
    RootStoreModule,
    EffectsModule.forRoot([]),
    RouterModule.forRoot(corRoutes, {
      initialNavigation: 'enabled',
      scrollPositionRestoration: 'enabled',
    }),
  ],
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: createApollo,
      deps: [HttpLink],
    },
  ],
})
export class CoreModule {}
