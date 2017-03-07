import {IService} from './IService';

export class MenuService implements IService {

    constructor() {}

    getId = ():string => 'menu';

    getTitle = ():string => 'UIAppTemplate';

    getAllThemes = (): Array<any> => {
      //return [
      //  {"title" : "List Views", "theme"  : "listViews",  "icon" : "icon-format-align-justify", "listView" : true, "component": ""},
      //  {"title" : "Parallax", "theme"  : "parallax",  "icon" : "icon-format-line-spacing", "listView" : false, "component":""},
      //  {"title" : "Login Pages", "theme"  : "loginPages",  "icon" : "icon-lock-open-outline", "listView" : false, "component":""},
      //  {"title" : "Image Gallery", "theme"  : "imageGallery",  "icon" : "icon-apps", "listView" : false, "component":""},
      //  {"title" : "Splash Screen", "theme"  : "splashScreens",  "icon" : "icon-logout", "listView" : false, "component":""},
      //  {"title" : "Check Boxs", "theme"  : "checkBoxes",  "icon" : "icon-checkbox-marked", "listView" : false, "component":""},
      //  {"title" : "Search Bars", "theme"  : "searchBars",  "icon" : "icon-magnify", "listView" : false, "component":""},
      //  {"title" : "Typo + small components", "theme"  : "textViews",  "icon" : "icon-tumblr", "listView" : false, "component":""},
      //  {"title" : "Wizard", "theme"  : "wizard",  "icon" : "icon-cellphone-settings", "listView" : false, "component":""},
      //  {"title" : "Spinner", "theme"  : "spinner",  "icon" : "icon-image-filter-tilt-shift", "listView" : false, "component":""},
      //  {"title" : "Tabs", "theme"  : "tabs",  "icon" : "icon-view-array", "listView" : false, "component":""},
      //];

      return [
        { "title": "Login", "theme": "LoginPage", "icon": "icon-login", "listView": false, "page": "LoginPage" },
        { "title": "Register", "theme": "RegisterPage", "icon": "icon-pencil", "listView": false, "component": "" },
        { "title": "Setting", "theme": "SettingPage", "icon": "icon-settings", "listView": false, "component": "" },
        { "title": "Contact", "theme": "NotifierPage", "icon": "icon-human", "listView": false, "component": "" },
        { "title": "Logout", "theme": "LogoutPage", "icon": "icon-logout", "listView": true, "component": "" },
       
      ];
    };

    getDataForTheme = (menuItem: any): Array<any> => {
      return [];
    };

    getEventsForTheme = (menuItem: any): any => {
      return {};
    };

    prepareParams = (item: any) => {
      return {
          title: item.title,
          data: this.getDataForTheme(item),
          events: this.getEventsForTheme(item)
      };
    };
}
