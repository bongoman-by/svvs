import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';

import { homeContainers, homeRoutes } from './home.common';

@NgModule({
  imports: [RouterModule.forChild(homeRoutes), EffectsModule.forRoot([])],
  exports: [...homeContainers],
  declarations: [...homeContainers],
})
export class HomeModule {}
