import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CosmopolitanPage } from './cosmopolitan.page';

const routes: Routes = [
  {
    path: '',
    component: CosmopolitanPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CosmopolitanPageRoutingModule {}
