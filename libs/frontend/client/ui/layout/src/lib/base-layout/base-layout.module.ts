import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderModule } from '../header/header.module';
import { baseLayoutsContainers } from './base-layout.common';

@NgModule({
  declarations: [...baseLayoutsContainers],
  imports: [RouterModule, HeaderModule],
  exports: [...baseLayoutsContainers],
})
export class BaseLayoutModule {}
