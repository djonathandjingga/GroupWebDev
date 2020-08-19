import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-french-toast',
  templateUrl: './french-toast.page.html',
  styleUrls: ['./french-toast.page.scss'],
})
export class FrenchToastPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  tab1() {
    this.navCtrl.navigateForward('tabs/tab1')
  }
}
