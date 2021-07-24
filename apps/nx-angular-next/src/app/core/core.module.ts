import { NxModule } from '@nrwl/angular';
import { NgModule } from '@angular/core';
import { HttpLink } from 'apollo-angular/http';
import { APOLLO_OPTIONS } from 'apollo-angular';
import { RouterModule } from '@angular/router';

import { createApollo } from './utils/create-apollo';
import { RootStoreModule } from '@svvs/frontend/shared/data-access/root-store';
import { AppComponent } from './components/app/app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    NxModule.forRoot(),
    RootStoreModule,
    RouterModule.forRoot([], { initialNavigation: 'enabled' }),
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
