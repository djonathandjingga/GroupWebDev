import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-caipirinha',
  templateUrl: './caipirinha.page.html',
  styleUrls: ['./caipirinha.page.scss'],
})
export class CaipirinhaPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  tab1() {
    this.navCtrl.navigateForward('tabs/tab1')
  }
}
