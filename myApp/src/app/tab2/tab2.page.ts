import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  slideOpts = {
    speed: 400,
    slidesPerView: 1.3,
    spaceBetween: -20
  };

  constructor() {}

}
