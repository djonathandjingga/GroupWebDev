import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  constructor(private navCtrl: NavController) {}

  ngOnInit() {
  }

  beefQuiche() {
    this.navCtrl.navigateForward('beef-quiche')
  }

  chocolateChipCookie() {
    this.navCtrl.navigateForward('chocolate-chip-cookie')
  }

  bloodyMary() {
    this.navCtrl.navigateForward('bloody-mary')
  }

  cosmopolitan() {
    this.navCtrl.navigateForward('cosmopolitan')
  }

  calzone() {
    this.navCtrl.navigateForward('calzone')
  }
}
