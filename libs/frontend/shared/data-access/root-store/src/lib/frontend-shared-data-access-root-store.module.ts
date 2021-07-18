import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';
import { rootInitialState } from './+state/root-initial-state';
import { reducers } from './+state/root-reducer';
import { StoreRouterStateSerializer } from './services/store-router-state-serializer.service';

@NgModule({
  imports: [
    RouterModule,
    StoreModule.forRoot(reducers, { initialState: rootInitialState }),
    StoreRouterConnectingModule.forRoot({
      serializer: StoreRouterStateSerializer,
    }),
  ],
})
export class FrontendSharedDataAccessRootStoreModule {}
