import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-chocolate-chip-cookie',
  templateUrl: './chocolate-chip-cookie.page.html',
  styleUrls: ['./chocolate-chip-cookie.page.scss'],
})
export class ChocolateChipCookiePage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  tab1() {
    this.navCtrl.navigateForward('tabs/tab1')
  }
}
