import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { ClientPage } from '../../pages/client/client';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  params: any = {};

  constructor(public navCtrl: NavController) {
    //data
    this.params.data = {
      "username": "Username",
      "password": "Password",
      "register": "Register",
      "login": "Login",
      "skip": "Skip",
      "logo": "assets/images/logo/login.png",
      "backgroundImage": "icon-account",
      "iconAccount": "icon-key",
      "iconKey": "",
      "iconLock": "assets/images/background/loginlight.jpg",
      "title": "Remember me",
    };
    //events
    this.params.events = {
      onClientInfo: function (params) {
        console.log('onClientInfo:' + JSON.stringify(params));
        //-----------------------------------------------
        // Custom code for login here
        //-----------------------------------------------
        // if true navigate to HomePage
        navCtrl.push(ClientPage, params, { animate: true, direction: 'forward', duration: 1000 }, function () { });
      },
      onCheckIn: function (params) {
        console.log('onCheckIn:' + JSON.stringify(params));
        //-----------------------------------------------
        // Custom code for login here
        //-----------------------------------------------
        // if true navigate to HomePage
       
        alert("Check In");
      }
    };
  }

  /*
  onEvent handler
  central handler
  */
  onEvent = (event: string): void => {
    if (this.params.events[event]) {
      this.params.events[event](this.params);
    }
  }


}
