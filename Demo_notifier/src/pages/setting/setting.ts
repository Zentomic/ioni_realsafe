import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-setting-layout',
  templateUrl: 'setting.html'
})

export class SettingPage {

  data: any = {};
  events: any = {};

  constructor(public navCtrl: NavController) {
    //data
    this.data = {
      "notifier": "Notifier",
      "setting": "Setting",
      "notifierChange": "Change",
      "logo": "assets/images/logo/login.png",
      "backgroundImage": "icon-account",
      "iconAccount": "icon-key",
      "iconKey": "",
      "iconLock": "assets/images/background/loginlight.jpg",

      "duration": "Duration",
      "name": "Alpha Beta",
      "fone": "(604) 123 4567",
      "email": "email@gmail.com",
      "notification": "Notification",

    };
    //events
    this.events = {
      onRegister: function (params) {
        console.log('onSetting:' + JSON.stringify(params));
      },
      onSkip: function (params) {
        console.log('onSkip:' + JSON.stringify(params));
      }
    };

  
  }


}
