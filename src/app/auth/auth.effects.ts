import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {defer, of} from 'rxjs';
import {tap} from 'rxjs/operators';
import {User} from 'firebase';

import {
  AuthActions,
  AuthActionTypes,
  LoginUserAction,
  LogoutUserAction
} from './auth.actions';

@Injectable()
export class AuthEffects {
  @Effect({dispatch: false})
  login$ = this.actions$.pipe(
    ofType<LoginUserAction>(AuthActionTypes.LoginUser),
    tap((action: LoginUserAction) => sessionStorage.setItem('user', JSON.stringify(action.payload.user)))
  );

  @Effect({dispatch: false})
  logout$ = this.actions$.pipe(
    ofType<LogoutUserAction>(AuthActionTypes.LogoutUser),
    tap((action: LogoutUserAction) => {
      sessionStorage.removeItem('user');
      this.router.navigateByUrl('/');
    })
  );

  @Effect()
  init$ = defer<AuthActions>(() => {
    const userData: string = sessionStorage.getItem('user');

    return userData ? of(new LoginUserAction({user: <User>JSON.parse(userData)})) : of(new LogoutUserAction());
  });

  constructor(private actions$: Actions, private router: Router) {
  }
}
