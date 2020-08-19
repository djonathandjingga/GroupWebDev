import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PannaCottaPage } from './panna-cotta.page';

const routes: Routes = [
  {
    path: '',
    component: PannaCottaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PannaCottaPageRoutingModule {}
