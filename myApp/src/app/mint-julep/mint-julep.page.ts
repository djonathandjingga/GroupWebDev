import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-mint-julep',
  templateUrl: './mint-julep.page.html',
  styleUrls: ['./mint-julep.page.scss'],
})
export class MintJulepPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  tab1() {
    this.navCtrl.navigateForward('tabs/tab1')
  }
}
