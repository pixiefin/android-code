import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { ExpensePage } from '../expense/expense';
import { BudgetPage } from '../budget/budget';

@Component({
  selector: 'page-bills',
  templateUrl: 'bills.html'
})
export class BillsPage {

  constructor(public navCtrl: NavController) {
  }
  
  goToExpense(params){
    if (!params) params = {};
    this.navCtrl.setRoot(ExpensePage);
  }
  goToBudget(params){
    if (!params) params = {};
    this.navCtrl.setRoot(BudgetPage);
  }
  
}
