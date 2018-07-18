import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ExpensePage } from '../expense/expense';

@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html'
})
export class SignupPage  {

  constructor(public navCtrl: NavController) {
  }
  goToExpense(params){
    if (!params) params = {};
    this.navCtrl.setRoot(ExpensePage);
  }
}
