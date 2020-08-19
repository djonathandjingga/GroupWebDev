import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FrenchToastPage } from './french-toast.page';

const routes: Routes = [
  {
    path: '',
    component: FrenchToastPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FrenchToastPageRoutingModule {}
