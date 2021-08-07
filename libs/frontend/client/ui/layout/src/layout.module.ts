import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { layoutsContainers } from './layout.common';

@NgModule({
  declarations: [...layoutsContainers],
  imports: [RouterModule],
  exports: [...layoutsContainers],
})
export class LayoutModule {}
