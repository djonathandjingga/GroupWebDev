import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-chicken-teriyaki',
  templateUrl: './chicken-teriyaki.page.html',
  styleUrls: ['./chicken-teriyaki.page.scss'],
})
export class ChickenTeriyakiPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  tab1() {
    this.navCtrl.navigateForward('tabs/tab1')
  }
}
