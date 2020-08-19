import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-bloody-mary',
  templateUrl: './bloody-mary.page.html',
  styleUrls: ['./bloody-mary.page.scss'],
})
export class BloodyMaryPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  tab1() {
    this.navCtrl.navigateForward('tabs/tab1')
  }
}
