import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SplitPeaSoupPage } from './split-pea-soup.page';

const routes: Routes = [
  {
    path: '',
    component: SplitPeaSoupPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SplitPeaSoupPageRoutingModule {}
