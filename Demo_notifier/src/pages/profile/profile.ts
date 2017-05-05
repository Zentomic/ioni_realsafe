// src/pages/profile/profile.ts
import {Component} from '@angular/core';
import {AuthService} from '../../services/auth/auth.service';
import { NavController } from 'ionic-angular';
import { HomePage } from '../../pages/home/home';


@Component({
  templateUrl: 'profile.html',
})
export class ProfilePage {
  // We need to inject AuthService so that we can
  // use it in the view
  params: any = {};

  constructor(public auth: AuthService, public navCtrl: NavController) {
    //this.subscriber = auth.userChange.subscribe((user) => {
    //  this.GoToMain(user);
    //});
   
  }
  ionViewWillLeave() {
    this.GoToMain();
  }


  GoToMain()
  {
    if (this.auth.user) {
      console.log("go to main");
      this.params.user = this.auth.user;
      this.navCtrl.setRoot(HomePage, this.params, { animate: true, direction: 'forward', duration: 1000 });
    }   
  }

}