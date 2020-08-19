import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChocolateSoufflePage } from './chocolate-souffle.page';

const routes: Routes = [
  {
    path: '',
    component: ChocolateSoufflePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChocolateSoufflePageRoutingModule {}
