import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BeefQuichePage } from './beef-quiche.page';

const routes: Routes = [
  {
    path: '',
    component: BeefQuichePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BeefQuichePageRoutingModule {}
