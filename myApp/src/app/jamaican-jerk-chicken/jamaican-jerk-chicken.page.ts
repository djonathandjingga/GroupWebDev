import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-jamaican-jerk-chicken',
  templateUrl: './jamaican-jerk-chicken.page.html',
  styleUrls: ['./jamaican-jerk-chicken.page.scss'],
})
export class JamaicanJerkChickenPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  tab1() {
    this.navCtrl.navigateForward('tabs/tab1')
  }
}
