import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../../pages/login/login';

@Component({
  selector: 'page-register',
  templateUrl: 'register.html'
})

export class RegisterPage {

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

      "fone": "Fone",
      "address": "Address",
      "email": "Email",
    };
    //events
    this.params.events = {
      onRegister: function (params) {
        console.log('onRegister:' + JSON.stringify(params));
        //-----------------------------------------------
        // Custom code for login here
        //-----------------------------------------------
        // if true navigate to HomePage
        // navCtrl.setRoot(LoginPage, params, { animate: true, direction: 'forward', duration: 1000 });
        navCtrl.pop({ animate: true, direction: 'forward', duration: 1000 }, function () { });
      }
    };

  
  }
}
