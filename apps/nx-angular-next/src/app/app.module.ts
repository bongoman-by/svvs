import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FrontendSharedDataAccessRootStoreModule } from '@svvs/frontend/shared/data-access/root-store';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule.withServerTransition({ appId: 'svvs-client' }),
    FrontendSharedDataAccessRootStoreModule,
    RouterModule.forRoot([], { initialNavigation: 'enabled' }),
  ],
})
export class AppModule {}
