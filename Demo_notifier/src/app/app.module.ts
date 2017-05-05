import { NgModule, ErrorHandler, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { ClientService } from '../services/clientService';

import { MyApp } from './app.component';

//PAGES
import { LoginPage } from '../pages/login/login';
import { HomePage } from '../pages/home/home';
import { RegisterPage } from '../pages/register/register';
import { NotifierPage } from '../pages/notifier/notifier';
import { ClientPage } from '../pages/client/client';
import { SettingPage } from '../pages/setting/setting';
import { ItemsPage } from '../pages/items/items';





//components
import { Spinner } from '../components/spinner/spinner';
import { SplashScreenLayout1 } from '../components/splash-screen/layout-1/splash-screen-layout-1';
import { SplashScreenLayout2 } from '../components/splash-screen/layout-2/splash-screen-layout-2';
import { SplashScreenLayout3 } from '../components/splash-screen/layout-3/splash-screen-layout-3';
import { SearchBarLayout1 } from '../components/search-bar/layout-1/search-bar-layout-1';
import { SearchBarLayout2 } from '../components/search-bar/layout-2/search-bar-layout-2';
import { CheckBoxLayout1 } from '../components/check-box/layout-1/check-box-layout-1';
import { CheckBoxLayout2 } from '../components/check-box/layout-2/check-box-layout-2';
import { WizardLayout1 } from '../components/wizard/layout-1/wizard-layout-1';
import { WizardLayout2 } from '../components/wizard/layout-2/wizard-layout-2';
import { TabsLayout1 } from '../components/tabs/layout-1/tabs-layout-1';
import { TabsLayout2 } from '../components/tabs/layout-2/tabs-layout-2';
import { TabsLayout3 } from '../components/tabs/layout-3/tabs-layout-3';

import { AppearanceAnimationLayout1 } from '../components/list-view/appearance-animation/layout-1/appearance-animation-layout-1';
import { AppearanceAnimationLayout2 } from '../components/list-view/appearance-animation/layout-2/appearance-animation-layout-2';
import { AppearanceAnimationLayout3 } from '../components/list-view/appearance-animation/layout-3/appearance-animation-layout-3';
import { AppearanceAnimationLayout4 } from '../components/list-view/appearance-animation/layout-4/appearance-animation-layout-4';
import { AppearanceAnimationLayout5 } from '../components/list-view/appearance-animation/layout-5/appearance-animation-layout-5';
import { DragAndDropLayout1 } from '../components/list-view/drag-and-drop/layout-1/drag-and-drop-layout-1';
import { DragAndDropLayout2 } from '../components/list-view/drag-and-drop/layout-2/drag-and-drop-layout-2';
import { ExpandableLayout1 } from '../components/list-view/expandable/layout-1/expandable-layout-1';
import { ExpandableLayout2 } from '../components/list-view/expandable/layout-2/expandable-layout-2';
import { GoogleCardLayout1 } from '../components/list-view/google-card/layout-1/google-card-layout-1';
import { GoogleCardLayout2 } from '../components/list-view/google-card/layout-2/google-card-layout-2';
import { SwipeToDismissLayout1 } from '../components/list-view/swipe-to-dismiss/layout-1/swipe-to-dismiss-layout-1';
import { SwipeToDismissLayout2 } from '../components/list-view/swipe-to-dismiss/layout-2/swipe-to-dismiss-layout-2';
import { ParallaxLayout1 } from '../components/parallax/layout-1/parallax-layout-1';
import { ParallaxLayout2 } from '../components/parallax/layout-2/parallax-layout-2';
import { ElasticHeader } from '../components/parallax/elastic-header';

import { FullScreenGallery } from '../components/full-screen-gallery/full-screen-gallery';
import { ImageGalleryLayout1 } from '../components/image-gallery/layout-1/image-gallery-layout-1';
import { ImageGalleryLayout2 } from '../components/image-gallery/layout-2/image-gallery-layout-2';
import { ImageGalleryLayout3 } from '../components/image-gallery/layout-3/image-gallery-layout-3';
import { SubImageGalleryLayout1 } from '../components/sub-image-gallery/layout-1/sub-image-gallery-layout-1';
import { SubImageGalleryLayout3 } from '../components/sub-image-gallery/layout-3/sub-image-gallery-layout-3';


import { LoginLayout1 } from '../components/login-register/login-layout-1/login-register-layout-1';
import { RegisterLayout2 } from '../components/login-register/register-layout-2/login-register-layout-2';

/**
 * import for JWT and AUTH0
 */
import { AuthConfig, AuthHttp } from 'angular2-jwt';
import { AuthService } from '../services/auth/auth.service';
import { Http } from '@angular/http';
import { Storage } from '@ionic/storage'

import { ProfilePage } from '../pages/profile/profile';
import { PingPage } from '../pages/ping/ping';


let storage: Storage = new Storage();

export function getAuthHttp(http) {
  return new AuthHttp(new AuthConfig({
    globalHeaders: [{ 'Accept': 'application/json' }],
    tokenGetter: (() => storage.get('id_token'))
  }), http);
}

@NgModule({
  declarations: [
    ElasticHeader,
    MyApp,
    ProfilePage,
    PingPage,
    HomePage,
    LoginPage,
    RegisterPage,
    NotifierPage,
   ClientPage,
    SettingPage,
    ItemsPage,
    
    Spinner,
    SplashScreenLayout1, SplashScreenLayout2, SplashScreenLayout3,
    SearchBarLayout1, SearchBarLayout2,
    CheckBoxLayout1, CheckBoxLayout2,
    WizardLayout1, WizardLayout2,
    TabsLayout1, TabsLayout2, TabsLayout3,
    AppearanceAnimationLayout1, AppearanceAnimationLayout2,
    AppearanceAnimationLayout3, AppearanceAnimationLayout4, AppearanceAnimationLayout5,
    DragAndDropLayout1, DragAndDropLayout2, ExpandableLayout1, ExpandableLayout2,
    GoogleCardLayout1, GoogleCardLayout2, SwipeToDismissLayout1, SwipeToDismissLayout2,
    ParallaxLayout1, ParallaxLayout2, SubImageGalleryLayout1, SubImageGalleryLayout3,
    FullScreenGallery, ImageGalleryLayout1, ImageGalleryLayout2, ImageGalleryLayout3,


    LoginLayout1, RegisterLayout2

  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    ProfilePage,
    PingPage,
    RegisterPage,
    NotifierPage,
    ClientPage,
    SettingPage,
    ItemsPage,
  
    Spinner, SplashScreenLayout1, SplashScreenLayout2, SplashScreenLayout3,
    SearchBarLayout1, SearchBarLayout2,
    CheckBoxLayout1, CheckBoxLayout2,
    WizardLayout1, WizardLayout2,
    TabsLayout1, TabsLayout2, TabsLayout3,
    AppearanceAnimationLayout1, AppearanceAnimationLayout2,
    AppearanceAnimationLayout3, AppearanceAnimationLayout4, AppearanceAnimationLayout5,
    DragAndDropLayout1, DragAndDropLayout2, ExpandableLayout1, ExpandableLayout2,
    GoogleCardLayout1, GoogleCardLayout2, SwipeToDismissLayout1, SwipeToDismissLayout2,
    ParallaxLayout1, ParallaxLayout2, SubImageGalleryLayout1, SubImageGalleryLayout3,
    FullScreenGallery, ImageGalleryLayout1, ImageGalleryLayout2, ImageGalleryLayout3,


    LoginLayout1, RegisterLayout2
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  exports: [
    ElasticHeader
  ],
  providers: [
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    ClientService,
    AuthService,
    {
      provide: AuthHttp,
      useFactory: getAuthHttp,
      deps: [Http]
    }
  ]
})
export class AppModule { }
