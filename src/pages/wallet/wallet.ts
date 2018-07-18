import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';

@Component({
  selector: 'page-wallet',
  templateUrl: 'wallet.html'
})
export class WalletPage {  

  constructor(public navCtrl: NavController, platform: Platform) {
    platform.ready().then(() => {
    });    
  }
  
  
}
