import { Component, ViewChild } from '@angular/core';
import { NavController, LoadingController, ToastController, Platform } from 'ionic-angular';
import { ExpensePage } from '../expense/expense';
import { SignupPage } from '../signup/signup';
import { AndroidPermissions } from "@ionic-native/android-permissions";
import { HTTP } from "@ionic-native/http";


declare var SMS: any;

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  
  
  @ViewChild('email') mail;
  @ViewChild('pass') pass;
  url = "http://35.200.185.110";
  messages:any = {};
  

  constructor(public navCtrl: NavController, platform: Platform, public loadingCtrl: LoadingController, public toastCtrl: ToastController,public androidPermissions: AndroidPermissions, public http: HTTP) {
      platform.ready().then(() => {
      this.getPerms();
      });
  }
  
  
   presentLoading() {
    let loader = this.loadingCtrl.create({
      content: "Please wait...",
      duration: 100
    });
    loader.present();
  }
  
  getPerms() {
    this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.READ_SMS).then(
    success => console.log('Checking SMS Perms'),
    err => this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.READ_SMS)
    );

    this.androidPermissions.requestPermissions([this.androidPermissions.PERMISSION.READ_SMS]);
    this.readSMS();
  }
  
  presentToast() {
    let toast = this.toastCtrl.create({
      message: 'Error : Check your Email/Password !!',
      duration: 1000,
      position: 'bottom'
    });
    toast.present();
  }

  readSMS() {

    this.http.setDataSerializer('json');

      let filter = {
       box : 'inbox', // 'inbox' (default), 'sent', 'draft'
       indexFrom : 0, // start from index 0
       maxCount : 1000, // count of SMS to return each time
      };

      if(SMS) SMS.listSMS(filter, (ListSms)=>{
         
        for(var i=0; i<ListSms.length; i++) {
            this.messages[i] = {"address": ListSms[i]['address'], "timestamp": ListSms[i]['date'], "body": ListSms[i]['body']};
        }

        this.http.post(this.url + "/fetchSMS", this.messages, {'Content-type': 'application/json'}).then(response => {
            console.log(response);
        });
      },

      Error=>{
        console.log('error list sms: ' + Error);
      });

  }
  
  load() {
    
      var login = new Map();
      login.set('vikasjohri','vikas');
      login.set('anshumandani','anshuman');
      login.set('','');
      
      if (login.has(this.mail.value) && login.get(this.mail.value) == this.pass.value) {
        this.presentLoading();
        this.navCtrl.push(ExpensePage, { messages: this.messages});  
      } else {
        this.presentToast();
      }   
  }
  
  signup() {
    this.presentLoading();
    this.navCtrl.push(SignupPage);
  }
}
