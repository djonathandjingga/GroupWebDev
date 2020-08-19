import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-beef-quiche',
  templateUrl: './beef-quiche.page.html',
  styleUrls: ['./beef-quiche.page.scss'],
})
export class BeefQuichePage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  tab1() {
    this.navCtrl.navigateForward('tabs/tab1')
  }
}
