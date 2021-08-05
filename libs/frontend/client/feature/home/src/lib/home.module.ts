import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { homeContainers, homeRoutes } from './home.common';

@NgModule({
  imports: [RouterModule.forChild(homeRoutes)],
  exports: [...homeContainers],
  declarations: [...homeContainers],
})
export class HomeModule {}
