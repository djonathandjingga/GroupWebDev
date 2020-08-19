import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-pancakes',
  templateUrl: './pancakes.page.html',
  styleUrls: ['./pancakes.page.scss'],
})
export class PancakesPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  tab1() {
    this.navCtrl.navigateForward('tabs/tab1')
  }
}
