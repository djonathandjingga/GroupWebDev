import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ButterChickenPage } from './butter-chicken.page';

const routes: Routes = [
  {
    path: '',
    component: ButterChickenPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ButterChickenPageRoutingModule {}
