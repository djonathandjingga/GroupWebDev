import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-chocolate-souffle',
  templateUrl: './chocolate-souffle.page.html',
  styleUrls: ['./chocolate-souffle.page.scss'],
})
export class ChocolateSoufflePage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  tab1() {
    this.navCtrl.navigateForward('tabs/tab1')
  }
}
