import { RouterModule } from '@angular/router';
/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule.withServerTransition({ appId: 'svvs-client' }),
    RouterModule.forRoot([], { initialNavigation: 'enabled' }),
  ],
})
export class AppModule {}
