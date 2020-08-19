import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BloodyMaryPage } from './bloody-mary.page';

const routes: Routes = [
  {
    path: '',
    component: BloodyMaryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BloodyMaryPageRoutingModule {}
