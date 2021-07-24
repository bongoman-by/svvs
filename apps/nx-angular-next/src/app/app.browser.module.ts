import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';

import { AppModule } from './app.module';
import { AppComponent } from './core/components/app/app.component';
import { CoreModule } from './core/core.module';

@NgModule({
  imports: [
    AppModule,
    CoreModule,
    BrowserAnimationsModule,
    !environment.production
      ? StoreDevtoolsModule.instrument({ logOnly: environment.production })
      : [],
  ],
  bootstrap: [AppComponent],
})
export class AppBrowserModule {}
