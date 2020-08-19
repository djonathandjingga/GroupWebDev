import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-pumpkin-pie',
  templateUrl: './pumpkin-pie.page.html',
  styleUrls: ['./pumpkin-pie.page.scss'],
})
export class PumpkinPiePage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  tab1() {
    this.navCtrl.navigateForward('tabs/tab1')
  }
}
