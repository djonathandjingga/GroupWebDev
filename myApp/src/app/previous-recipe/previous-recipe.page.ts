import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-previous-recipe',
  templateUrl: './previous-recipe.page.html',
  styleUrls: ['./previous-recipe.page.scss'],
})
export class PreviousRecipePage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  pannaCotta() {
    this.navCtrl.navigateForward('panna-cotta')
  }

  jamaicanJerkChicken() {
    this.navCtrl.navigateForward('jamaican-jerk-chicken')
  }

  pumpkinPie() {
    this.navCtrl.navigateForward('pumpkin-pie')
  }

  maiTai() {
    this.navCtrl.navigateForward('mai-tai')
  }

  caipirinha() {
    this.navCtrl.navigateForward('caipirinha')
  }
}
