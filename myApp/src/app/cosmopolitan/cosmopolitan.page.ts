import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-cosmopolitan',
  templateUrl: './cosmopolitan.page.html',
  styleUrls: ['./cosmopolitan.page.scss'],
})
export class CosmopolitanPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  tab1() {
    this.navCtrl.navigateForward('tabs/tab1')
  }
}
