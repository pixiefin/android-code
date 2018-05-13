import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { LoginPage } from '../pages/login/login';
import { InvestmentsPage } from '../pages/investments/investments';
import { InsurancePage } from '../pages/insurance/insurance';
import { WalletPage } from '../pages/wallet/wallet';
import { DepositsPage } from '../pages/deposits/deposits';


import { ExpensePage } from '../pages/expense/expense';



@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) navCtrl: Nav;
    rootPage:any = ExpensePage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
  goToLogin(params){
    if (!params) params = {};
    this.navCtrl.setRoot(LoginPage);
  }goToExpense(params){
    if (!params) params = {};
    this.navCtrl.setRoot(ExpensePage);
  }goToInvestments(params){
    if (!params) params = {};
    this.navCtrl.setRoot(InvestmentsPage);
  }goToInsurance(params){
    if (!params) params = {};
    this.navCtrl.setRoot(InsurancePage);
  }goToWallet(params){
    if (!params) params = {};
    this.navCtrl.setRoot(WalletPage);
  }goToDeposits(params){
    if (!params) params = {};
    this.navCtrl.setRoot(DepositsPage);
  }
}
