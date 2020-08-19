import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PreviousRecipePageRoutingModule } from './previous-recipe-routing.module';

import { PreviousRecipePage } from './previous-recipe.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PreviousRecipePageRoutingModule
  ],
  declarations: [PreviousRecipePage]
})
export class PreviousRecipePageModule {}
