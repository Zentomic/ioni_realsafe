import { Component, ViewChild } from '@angular/core';
import { Platform, MenuController, Nav } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import { MenuService } from '../services/menu-service';
//import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
//import { ItemsPage } from '../pages/items/items';
import { RegisterPage } from '../pages/register/register';
import { NotifierPage } from '../pages/notifier/notifier';
//import { ClientPage } from '../pages/client/client';
import { SettingPage } from '../pages/setting/setting';
import { AuthService } from '../services/auth/auth.service';

import { ProfilePage } from '../pages/profile/profile';


@Component({
  templateUrl: 'app.html',
  providers: [MenuService]
})

export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage = LoginPage; // originial code

  pages: any;
  leftMenuTitle: string;

  constructor(public platform: Platform,
    public menu: MenuController,
    private menuService: MenuService,
    public auth: AuthService)
  {
    platform.ready().then(() => {
      this.initializeApp();

      this.pages = menuService.getAllThemes();
      this.leftMenuTitle = menuService.getTitle();

      //------------------------------
      // auth
      auth.startupTokenRefresh();
    });

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }

  openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();

    // navigate to the new page if it is not the current page
    //this.nav.setRoot(ItemsPage, {
    //  componentName: page.theme
    //});

    var value: any = null;

    switch (page.theme) {
      default:
      case "ProfilePage":
        value = ProfilePage;
        break;
      case "LogoutPage":
        value = null;
        this.auth.logout();
        break;
      case "RegisterPage":
        value = RegisterPage;
        break;
      case "SettingPage":
        value = SettingPage;
        break;
      case "NotifierPage":
        value = NotifierPage;
        break;
      case "Auth0":
        value = ProfilePage;
        break;
    }
    // jump to page
    if (value) {
      this.nav.push(value, {
        componentName: page.theme
      });
    } else {
      this.nav.setRoot(LoginPage, {
        componentName: page.theme
      });
    }
  }
}
