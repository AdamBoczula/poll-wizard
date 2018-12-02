import {Component} from '@angular/core';
import * as R from 'ramda';
import {User} from 'firebase';
import {Store} from '@ngrx/store';

import {LoginUserAction} from './auth/auth.actions';
import {ExampleService} from './services/example.service';
import {AppState} from './reducers';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = R.toUpper('poll-wizard');

  constructor(
    private store: Store<AppState>,
    private exampleService: ExampleService,
    private router: Router) {
  }

  exampleLogin(): void {
    // some logic that calls some service which logs us in and returns User instance
    const user: User = this.exampleService.exampleLogin();
    this.store.dispatch(new LoginUserAction({
      user
    }));
    this.router.navigateByUrl('/example');
  }
}
