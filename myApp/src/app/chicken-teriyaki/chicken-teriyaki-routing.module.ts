import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChickenTeriyakiPage } from './chicken-teriyaki.page';

const routes: Routes = [
  {
    path: '',
    component: ChickenTeriyakiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChickenTeriyakiPageRoutingModule {}
