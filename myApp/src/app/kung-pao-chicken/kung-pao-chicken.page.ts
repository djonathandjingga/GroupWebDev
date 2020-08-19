import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-kung-pao-chicken',
  templateUrl: './kung-pao-chicken.page.html',
  styleUrls: ['./kung-pao-chicken.page.scss'],
})
export class KungPaoChickenPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  tab1() {
    this.navCtrl.navigateForward('tabs/tab1')
  }
}
