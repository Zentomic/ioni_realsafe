/*
  Service for global storage for client info
*/
import { Injectable } from '@angular/core';

@Injectable()
export class ClientService {

  public accountInfo;

  setUserData(value) {
    this.accountInfo = value;
  }

  getUserData() {
    return this.accountInfo;
  }

  saveInfo(values)
  {
    console.log("Save on ClientService  " + values);
    //-------------------------------------------
    // custom code
  }

}