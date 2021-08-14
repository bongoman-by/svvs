import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromAuth from './+state/auth.reducer';
import { AuthEffects } from './+state/auth.effects';
import { IAuthStoreOptions } from './interfaces/auth-store-options.interface';
import { IAuthStorage } from './interfaces/auth-storage.interface';
import { BaseAuthStorage } from './services/base-auth-storage.service';
import { IAuthApollo } from './interfaces/auth-apollo-interface';
import { BaseAuthApollo } from './services/base-auth-apollo.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './interceptors/auth.interceptor';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(fromAuth.AUTH_FEATURE_KEY, fromAuth.reducer),
    EffectsModule.forFeature([AuthEffects]),
  ],
})
export class AuthStoreModule {
  static forRoot(
    options: Partial<IAuthStoreOptions> = {}
  ): ModuleWithProviders<AuthStoreModule> {
    return {
      ngModule: AuthStoreModule,
      providers: [
        {
          provide: HTTP_INTERCEPTORS,
          useClass: AuthInterceptor,
          multi: true,
        },
        {
          provide: IAuthStorage,
          useClass: options.storage || BaseAuthStorage,
        },
        {
          provide: IAuthApollo,
          useClass: options.apollo || BaseAuthApollo,
        },
      ],
    };
  }
}
