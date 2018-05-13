import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ExpensePage } from '../expense/expense';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  constructor(public navCtrl: NavController) {
  }
  goToExpense(params){
    if (!params) params = {};
    this.navCtrl.push(ExpensePage);
  }
}
