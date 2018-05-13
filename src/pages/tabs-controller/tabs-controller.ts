import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ExpensePage } from '../expense/expense';
import { BudgetPage } from '../budget/budget';
import { BillsPage } from '../bills/bills';

@Component({
  selector: 'page-tabs-controller',
  templateUrl: 'tabs-controller.html'
})
export class TabsControllerPage {

  tab1Root: any = ExpensePage;
  tab2Root: any = BudgetPage;
  tab3Root: any = BillsPage;
  constructor(public navCtrl: NavController) {
  }
  
}
