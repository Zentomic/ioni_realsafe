import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';


import {IService} from '../../services/IService';
//import {ItemDetailsPage} from '../item-details/item-details';
//import {LoginPage} from '../../pages/login/login';

import {CheckBoxService} from '../../services/check-box-service';
import {TextViewService} from '../../services/text-view-service';
import {SpinnerService} from '../../services/spinner-service';
import {SplashScreenService} from '../../services/splash-screen-service';
import {SearchBarService} from '../../services/search-bar-service';
import {WizardService} from '../../services/wizard-service';
import {TabsService} from '../../services/tabs-service';
import {LoginRegisterService} from '../../services/login-register-service';
import {ListViewService} from '../../services/list-view-service';
import {ListViewExpandableService} from '../../services/list-view-expandable-service';
import {ListViewDragAndDropService} from '../../services/list-view-drag-and-drop-service';
import {ListViewSwipeToDismissService} from '../../services/list-view-swipe-to-dismiss-service';
import {ListViewAppearanceAnimationService} from '../../services/list-view-appearance-animation-service';
import {ListViewGoogleCardsService} from '../../services/list-view-google-card-service';
import {ParallaxService} from '../../services/parallax-service';
import {ImageGalleryService} from '../../services/image-gallery-service';


@Component({
  templateUrl: 'items.html',
  providers: [TextViewService, SpinnerService, SplashScreenService, LoginRegisterService,
    SearchBarService, CheckBoxService, WizardService, TabsService, ParallaxService,
    ListViewService, ListViewExpandableService, ListViewDragAndDropService, ImageGalleryService,
    ListViewSwipeToDismissService, ListViewGoogleCardsService, ListViewAppearanceAnimationService]
})

export class ItemsPage {
  title: string;
  componentName: string;
  pages: any;
  listServices : { [key:string]:IService; } = {};
  service: IService;

  // services: array
  constructor(
    public navCtrl: NavController,
    private textViewService: TextViewService,
    private spinnerService: SpinnerService,
    private imageGalleryService: ImageGalleryService,
    private searchBarService: SearchBarService,
    private checkBoxService: CheckBoxService,
    private parallaxService: ParallaxService,
    private wizardService: WizardService,
    private tabsService: TabsService,
    private listViewService: ListViewService,
    private listViewExpandableService: ListViewExpandableService,
    private listViewDragAndDropService: ListViewDragAndDropService,
    private listViewSwipeToDismissService: ListViewSwipeToDismissService,
    private listViewAppearanceAnimationService: ListViewAppearanceAnimationService,
    private listViewGoogleCardsService: ListViewGoogleCardsService,
    private loginRegisterService: LoginRegisterService,
    private splashScreenService: SplashScreenService,
    navParams: NavParams
  ) {

    this.listServices = {
      'checkBoxes'          : checkBoxService,
      'loginPages'          : loginRegisterService,
      'imageGallery'        : imageGalleryService,
      'textViews'           : textViewService,
      'spinner'             : spinnerService,
      'parallax'            : parallaxService,
      'wizard'              : wizardService,
      'searchBars'          : searchBarService,
      'tabs'                : tabsService,
      'listViews'           : listViewService,
      'expandable'          : listViewExpandableService,
      'dragAndDrop'         : listViewDragAndDropService,
      'swipeToDismiss'      : listViewSwipeToDismissService,
      'appearanceAnimation' : listViewAppearanceAnimationService,
      'googleCards'         : listViewGoogleCardsService,
      'splashScreens'       : splashScreenService
    };

    this.componentName = navParams.get('componentName');
    this.service = this.listServices[this.componentName];

    if (this.service) {
      this.pages = this.service.getAllThemes();
      this.title = this.service.getTitle();
    }
  }

  selectPageForOpen(value: string): any {
    console.log(value);
    //let page = ItemDetailsPage;

    //if (value === "spinner") {
    //  page = ItemDetailsPageSpinner;
    //} else if (value === "textViews") {
    //  page = ItemDetailsPageTextView;
    //} else if (value === "splashScreens") {
    //  page = ItemDetailsPageSplashScreen;
    //} else if (value === "searchBars") {
    //  page = ItemDetailsPageSearchBar;
    //} else if (value === "checkBoxes") {
    //  page = ItemDetailsPageCheckBox;
    //} else if (value === "wizard") {
    //  page = ItemDetailsPageWizard;
    //} else if (value === "tabs") {
    //  page = ItemDetailsPageTabs;
    //}  else if (value === "loginPages") {
    //  page = ItemDetailsPageLoginAndRegister;
    //} else if (value === "expandable") {
    //  page = ItemDetailsPageExpandable;
    //} else if (value === "swipeToDismiss") {
    //  page = ItemDetailsPageSwipeToDismiss;
    //} else if (value === "dragAndDrop"){
    //  page = ItemDetailsPageDragAndDrop;
    //} else if (value === "appearanceAnimation") {
    //  page = ItemDetailsPageAppearanceAnimation;
    //} else if (value === "googleCards") {
    //  page = ItemDetailsPageGoogleCard;
    //} else if (value === "parallax") {
    //  page = ItemDetailsPageParallax;
    //}  if (value === "imageGallery") {
    //  page = ItemDetailsPageImageGallery;
    //}
    //return page;
   
  }

  openPage(page:any) {
    if (page.listView) {
      this.navCtrl.push(ItemsPage, {
        componentName: page.theme
      });
    } else {
     
      this.navCtrl.push(this.selectPageForOpen(this.componentName), {
        service: this.service,
        page: page
      });
    }
  }
}
