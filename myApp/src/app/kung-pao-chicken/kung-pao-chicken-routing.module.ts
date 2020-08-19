import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KungPaoChickenPage } from './kung-pao-chicken.page';

const routes: Routes = [
  {
    path: '',
    component: KungPaoChickenPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KungPaoChickenPageRoutingModule {}
