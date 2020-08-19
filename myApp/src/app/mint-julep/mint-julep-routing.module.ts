import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MintJulepPage } from './mint-julep.page';

const routes: Routes = [
  {
    path: '',
    component: MintJulepPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MintJulepPageRoutingModule {}
