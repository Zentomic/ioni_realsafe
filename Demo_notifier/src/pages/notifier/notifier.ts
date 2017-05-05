import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {AuthService} from '../../services/auth/auth.service';

@Component({
  selector: 'page-nofitier',
  templateUrl: 'notifier.html'
})

export class NotifierPage {

  data: any = {
    name: "Full name",
    notifier: "Notifier",
    save: "Save",
    logo: "assets/images/logo/login.png",
    backgroundImage: "icon-account",
    iconAccount: "icon-key",
    iconKey: "",
    iconLock: "assets/images/background/loginlight.jpg",

    fone: "Fone",
    address: "Address",
    email: "Email",
  };
  events: any = {};

  constructor(public navCtrl: NavController, private auth: AuthService) {
    //data


    this.LoadUserInfo();

    //events
    this.events = {
      onSave: function (params) {
        console.log('onSave:' + JSON.stringify(params));
        navCtrl.pop();
      },
      onSkip: function (params) {
        console.log('onSkip:' + JSON.stringify(params));
      }
    };


  }

  
  LoadUserInfo() {
    let user: any = this.auth.user;
    if (this.auth) {
      this.data.name =user.name;
      this.data.email = user.email;
    }
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
