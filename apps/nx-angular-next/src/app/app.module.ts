/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UiComponentModule } from '@svvs/ui-component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule.withServerTransition({ appId: 'serverApp' }), UiComponentModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
