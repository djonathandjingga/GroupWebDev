import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChocolateChipCookiePage } from './chocolate-chip-cookie.page';

const routes: Routes = [
  {
    path: '',
    component: ChocolateChipCookiePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChocolateChipCookiePageRoutingModule {}
