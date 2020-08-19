import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PumpkinPiePage } from './pumpkin-pie.page';

const routes: Routes = [
  {
    path: '',
    component: PumpkinPiePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PumpkinPiePageRoutingModule {}
