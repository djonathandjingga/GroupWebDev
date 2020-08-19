import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PreviousRecipePage } from './previous-recipe.page';

const routes: Routes = [
  {
    path: '',
    component: PreviousRecipePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PreviousRecipePageRoutingModule {}
