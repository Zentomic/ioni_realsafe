import { Component, Input } from '@angular/core';

@Component({
    selector: 'register-layout-2',
    templateUrl: 'login-register-layout-2.html'
})

export class RegisterLayout2 {

    @Input() data: any;
    @Input() events: any;

    username: string;
    password: string;
    country: string;
    city: string;
    email: string;

    constructor() { }

    onEvent = (event: string): void => {
        if (this.events[event]) {
            this.events[event]({
                'username': this.username,
                'password': this.password,
                'address': this.country,
                'fone': this.city,
                'email': this.email
            });
        }
    }
}
