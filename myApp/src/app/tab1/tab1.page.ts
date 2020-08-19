import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  slideOpts = {
    speed: 400,
    slidesPerView: 1.3,
    spaceBetween: -5
  };

  secondslideOpts = {
    speed: 400,
    slidesPerView: 1.1,
    spaceBetween: -20
  };
  
  constructor(private navCtrl: NavController) {}

  chickenTeriyaki() {
    this.navCtrl.navigateForward('chicken-teriyaki')
  }

  kungPaoChicken() {
    this.navCtrl.navigateForward('kung-pao-chicken')
  }

  frenchToast() {
    this.navCtrl.navigateForward('french-toast')
  }

  butterChicken() {
    this.navCtrl.navigateForward('butter-chicken')
  }

  pancakes() {
    this.navCtrl.navigateForward('pancakes')
  }

  splitPeaSoup() {
    this.navCtrl.navigateForward('split-pea-soup')
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
}
