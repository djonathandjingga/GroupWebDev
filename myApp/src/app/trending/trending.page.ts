import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-trending',
  templateUrl: './trending.page.html',
  styleUrls: ['./trending.page.scss'],
})
export class TrendingPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  chickenTeriyaki() {
    this.navCtrl.navigateForward('chicken-teriyaki')
  }

  kungPaoChicken() {
    this.navCtrl.navigateForward('kung-pao-chicken')
  }

  frenchToast() {
    this.navCtrl.navigateForward('french-toast')
  }

  pommesAnna() {
    this.navCtrl.navigateForward('pommes-anna')
  }

  chocolateSouffle() {
    this.navCtrl.navigateForward('chocolate-souffle')
  }
}
