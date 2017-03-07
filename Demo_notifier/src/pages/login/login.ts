import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { HomePage } from '../../pages/home/home';
import { RegisterPage } from '../../pages/register/register';

@Component({
  selector: 'page-login3',
  templateUrl: 'login.html'
})
export class LoginPage {

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
      onLogin: function (params) {
        console.log('onLogin:' + JSON.stringify(params));
        //-----------------------------------------------
        // Custom code for login here
        //-----------------------------------------------
        // if true navigate to HomePage
        navCtrl.setRoot(HomePage, params, { animate: true, direction: 'forward', duration:1000 });
      },
      onRegister: function (params) {
        console.log('onRegister:' + JSON.stringify(params));
        //-----------------------------------------------
        // Custom code for Register here
        //-----------------------------------------------
        // if true navigate to RegisterPage
        navCtrl.push(RegisterPage, params, { animate: true, direction: 'forward', duration: 1000 });
      },
      onSkip: function (params) {
        console.log('onSkip:' + JSON.stringify(params));
      },
      onFacebook: function (params) {
        console.log('onFacebook:' + JSON.stringify(params));
      },
      onTwitter: function (params) {
        console.log('onTwitter:' + JSON.stringify(params));
      },
      onGoogle: function (params) {
        console.log('onGoogle:' + JSON.stringify(params));
      },
      onPinterest: function (params) {
        console.log('onPinterest:' + JSON.stringify(params));
      },
    };
  }

}
