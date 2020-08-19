import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MaiTaiPage } from './mai-tai.page';

const routes: Routes = [
  {
    path: '',
    component: MaiTaiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MaiTaiPageRoutingModule {}
