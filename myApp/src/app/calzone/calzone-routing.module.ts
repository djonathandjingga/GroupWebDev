import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CalzonePage } from './calzone.page';

const routes: Routes = [
  {
    path: '',
    component: CalzonePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CalzonePageRoutingModule {}
