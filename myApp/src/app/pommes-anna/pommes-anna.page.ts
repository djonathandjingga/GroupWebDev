import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-pommes-anna',
  templateUrl: './pommes-anna.page.html',
  styleUrls: ['./pommes-anna.page.scss'],
})
export class PommesAnnaPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  tab1() {
    this.navCtrl.navigateForward('tabs/tab1')
  }
}
