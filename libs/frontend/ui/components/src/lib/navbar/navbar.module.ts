import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { navbarContainers } from './navbar.common';

@NgModule({
  declarations: [...navbarContainers],
  exports: [...navbarContainers],
  imports: [RouterModule],
})
export class NavbarModule {}
