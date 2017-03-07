import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ClientService } from '../../services/clientService';

@Component({
  selector: 'page-client-layout',
  templateUrl: 'client.html',
  providers: [ClientService]
})

export class ClientPage {

  data: any = {};
  events: any = {};
  client: any = {};
  //----------------------------------------------------------------
  constructor(public navCtrl: NavController, private clientService: ClientService) {
    //data
    this.data = {
      "name": "Full name",
      "client": "Client Info",
      "save": "Save",
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
    this.events = {
      onSave: function (params) {
        console.log('onSaveClient:' + JSON.stringify(params));
        //-----------------------------------------------
        // Custom code for login here
        //-----------------------------------------------
        clientService.saveInfo(params);
        // if true navigate to HomePage
        navCtrl.pop({ animate: true, direction: 'forward', duration: 1000 }, function () { });
      }
    };
    //client info
    this.client = {
      "name": "Alpha beta",
      "fone": "604 123 4567",
      "address": "123 Heaven Street",
      "email": "email@gmail.com"
    };
  }

  /*
   onEvent handler
   central handler
   */
  onEvent = (event: string): void => {
    if (this.events[event]) {
      this.events[event](this.client); // call function in event list
    }
  }

}
