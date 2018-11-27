import { Component, OnInit } from '@angular/core';
import { AuthenticationProviders, LoginFormData } from '../../../models';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  authenticationProviders = AuthenticationProviders;
  showPassword = false;

  constructor() { }

  ngOnInit() { }

  onLoginFormSubmit(loginFormData: LoginFormData, isValid: boolean): void {
    if (!isValid) {
      return;
    }
    console.log(loginFormData);
  }

  loginWithExternalProvider(provider: AuthenticationProviders): void {
    console.log(this.authenticationProviders[provider]);
  }
}
