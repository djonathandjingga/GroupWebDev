import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JamaicanJerkChickenPage } from './jamaican-jerk-chicken.page';

const routes: Routes = [
  {
    path: '',
    component: JamaicanJerkChickenPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JamaicanJerkChickenPageRoutingModule {}
