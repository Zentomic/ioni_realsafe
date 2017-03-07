import { Component, Input } from '@angular/core';

@Component({
    selector: 'login-layout',
    templateUrl: 'login-register-layout-1.html'
})

export class LoginLayout1 {
  @Input() data: any;
  @Input() events: any;

  public username: string;
  public password: string;
  public remember: boolean;
  public title: string;

  constructor() {
     this.remember = true;
  }

  onEvent = (event: string): void => {
    if (this.events[event]) {
        this.events[event]({
            'username' : this.username,
            'password' : this.password
        });
    }
  }
}
