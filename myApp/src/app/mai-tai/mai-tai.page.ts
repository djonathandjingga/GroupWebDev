import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-mai-tai',
  templateUrl: './mai-tai.page.html',
  styleUrls: ['./mai-tai.page.scss'],
})
export class MaiTaiPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  tab1() {
    this.navCtrl.navigateForward('tabs/tab1')
  }
}
