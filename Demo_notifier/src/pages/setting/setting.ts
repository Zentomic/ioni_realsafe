import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {AuthService} from '../../services/auth/auth.service';
@Component({
  selector: 'page-setting-layout',
  templateUrl: 'setting.html'
})

export class SettingPage {

  data: any = {};
  events: any = {};

  constructor(public navCtrl: NavController, private auth: AuthService)  {
    //data
    this.data = {
      "notifier": "Profile",
      "setting": "Setting",
      "save": "Save",
      "notifierChange": "Change",
      "logo": "assets/images/logo/login.png",
      "backgroundImage": "icon-account",
      "iconAccount": "icon-key",
      "iconKey": "",
      "iconLock": "assets/images/background/loginlight.jpg",

      "duration": "Duration",
      "name": "Alpha Beta",
      "firstname": "Alpha",
      "middlename": "Beta",
      "lastname": "Gump",
      "fone": "(604) 123 4567",
      "email": "email@gmail.com",
      "notification": "Notification",

    };
    //events
    this.events = {
      onSave: function (params) {
        console.log('onSetting:' + JSON.stringify(params));
        navCtrl.pop();
      },
      onSkip: function (params) {
        console.log('onSkip:' + JSON.stringify(params));
      }
    };

  
  }

  /*
  onEvent handler
  central handler
  */
  onEvent = (event: string): void => {
    if (this.events[event]) {
      this.events[event](this.data);
    }
  }


}
