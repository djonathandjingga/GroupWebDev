import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-your-favorites',
  templateUrl: './your-favorites.page.html',
  styleUrls: ['./your-favorites.page.scss'],
})
export class YourFavoritesPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  pancakes() {
    this.navCtrl.navigateForward('pancakes')
  }

  butterChicken() {
    this.navCtrl.navigateForward('butter-chicken')
  }

  splitPeaSoup() {
    this.navCtrl.navigateForward('split-pea-soup')
  }

  mintJulep() {
    this.navCtrl.navigateForward('mint-julep')
  }

  negroni() {
    this.navCtrl.navigateForward('negroni')
  }
}
