import {Component, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {isLoggedIn, isLoggedOut} from '../../auth/auth.selectors';
import {User} from 'firebase';
import {LoginUserAction, LogoutUserAction} from '../../auth/auth.actions';
import {Observable} from 'rxjs';
import {AppState} from '../../reducers';
import {ExampleService} from '../../services/example.service';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css']
})
export class ExampleComponent implements OnInit {
  isLoggedIn$: Observable<boolean>;
  isLoggedOut$: Observable<boolean>;

  constructor(private store: Store<AppState>, private exampleService: ExampleService) {
  }

  ngOnInit(): void {
    this.isLoggedIn$ = this.store.pipe(
      select(isLoggedIn)
    );

    this.isLoggedOut$ = this.store.pipe(
      select(isLoggedOut)
    );
  }

  exampleLogin(): void {
    // some logic that calls some service which logs us in and returns User instance
    const user: User = this.exampleService.exampleLogin();
    this.store.dispatch(new LoginUserAction({
      user
    }));
  }

  exampleLogout(): void {
    this.store.dispatch(new LogoutUserAction());
  }
}
