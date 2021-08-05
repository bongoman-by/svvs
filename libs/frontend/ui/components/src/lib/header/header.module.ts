import { NgModule } from '@angular/core';
import { headerContainers } from './header.common';
import { RouterModule } from '@angular/router';
import { NavbarModule } from '../navbar/navbar.module';

@NgModule({
  declarations: [...headerContainers],
  exports: [...headerContainers],
  imports: [RouterModule, NavbarModule],
})
export class HeaderModule {}
