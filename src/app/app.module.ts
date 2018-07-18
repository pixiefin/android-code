import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { ExpensePage } from '../pages/expense/expense';
import { BudgetPage } from '../pages/budget/budget';
import { BillsPage } from '../pages/bills/bills';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
import { DepositsPage } from '../pages/deposits/deposits';
import { InvestmentsPage } from '../pages/investments/investments';
import { InsurancePage } from '../pages/insurance/insurance';
import { WalletPage } from '../pages/wallet/wallet';
import { AndroidPermissions } from "@ionic-native/android-permissions";
import { HTTP } from '@ionic-native/http';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    ExpensePage,
    BudgetPage,
    BillsPage,
    LoginPage,
    SignupPage,
    DepositsPage,
    InvestmentsPage,
    InsurancePage,
    WalletPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ExpensePage,
    BudgetPage,
    BillsPage,
    LoginPage,
    SignupPage,
    DepositsPage,
    InvestmentsPage,
    InsurancePage,
    WalletPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AndroidPermissions,
    HTTP,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}