import { HttpClientModule } from '@angular/common/http';
import {
  BrowserModule,
  BrowserTransferStateModule,
} from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TransferHttpCacheModule } from '@nguniversal/common';

@NgModule({
  imports: [
    BrowserModule.withServerTransition({ appId: 'svvs-client' }),
    HttpClientModule,
    BrowserTransferStateModule,
    TransferHttpCacheModule,
  ],
})
export class AppModule {}
