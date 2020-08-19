import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-butter-chicken',
  templateUrl: './butter-chicken.page.html',
  styleUrls: ['./butter-chicken.page.scss'],
})
export class ButterChickenPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  tab1() {
    this.navCtrl.navigateForward('tabs/tab1')
  }

}
