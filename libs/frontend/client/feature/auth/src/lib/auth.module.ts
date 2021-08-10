import { NgModule } from '@angular/core';
import { authContainers, authRoutes } from './auth.common';
import { RouterModule } from '@angular/router';

import { AuthStoreModule } from '@svvs/frontend/shared/data-access/auth-store';
import { LoginFormModule } from '@svvs/frontend/client/ui/login-form';

@NgModule({
  imports: [
    AuthStoreModule.forRoot(),
    LoginFormModule,
    RouterModule.forChild(authRoutes),
  ],
  exports: [authContainers],
  declarations: [...authContainers],
})
export class AuthModule {}
