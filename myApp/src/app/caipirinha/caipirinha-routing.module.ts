import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CaipirinhaPage } from './caipirinha.page';

const routes: Routes = [
  {
    path: '',
    component: CaipirinhaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CaipirinhaPageRoutingModule {}
