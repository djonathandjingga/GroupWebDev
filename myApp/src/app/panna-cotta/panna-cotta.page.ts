import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-panna-cotta',
  templateUrl: './panna-cotta.page.html',
  styleUrls: ['./panna-cotta.page.scss'],
})
export class PannaCottaPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  tab1() {
    this.navCtrl.navigateForward('tabs/tab1')
  }
}
