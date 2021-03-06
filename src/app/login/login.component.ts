import { Component } from '@angular/core';
import 'rxjs/add/operator/map';

import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'ndp-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {

  data = {
    name: '',
    pass: ''
  };

  errorMessage: string;

  constructor(private auth: AuthService) {}

  submit() {
    this.auth.attempAuth('login', this.data)
      .map(res => res.json())
      .subscribe(
        response => this.auth.finishAuth(response, this.data),
        error => this.errorMessage = error.json().message
      );
  }
}
