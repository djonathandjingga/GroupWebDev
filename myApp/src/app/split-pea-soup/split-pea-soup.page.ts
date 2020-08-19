import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-split-pea-soup',
  templateUrl: './split-pea-soup.page.html',
  styleUrls: ['./split-pea-soup.page.scss'],
})
export class SplitPeaSoupPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  tab1() {
    this.navCtrl.navigateForward('tabs/tab1')
  }
}
