import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';


@Component({
  selector: 'page-deposits',
  templateUrl: 'deposits.html'
})
export class DepositsPage {
  
  constructor(public navCtrl: NavController, platform: Platform) {
  platform.ready().then(() => {
    
  });
  }
    
}
