import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-nofitier',
  templateUrl: 'notifier.html'
})

export class NotifierPage {

  data: any = {};
  events: any = {};

  constructor(public navCtrl: NavController) {
    //data
    this.data = {
      "name": "Full name",
      "notifier": "Notifier",
      "save": "Save",
      "logo": "assets/images/logo/login.png",
      "backgroundImage": "icon-account",
      "iconAccount": "icon-key",
      "iconKey": "",
      "iconLock": "assets/images/background/loginlight.jpg",

      "fone": "Fone",
      "address": "Address",
      "email": "Email",
    };
    //events
    this.events = {
      onRegister: function (params) {
        console.log('onNotifier:' + JSON.stringify(params));
      },
      onSkip: function (params) {
        console.log('onSkip:' + JSON.stringify(params));
      }
    };

  
  }


}
