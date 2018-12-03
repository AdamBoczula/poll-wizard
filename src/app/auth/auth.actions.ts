import {Action} from '@ngrx/store';
import {User} from 'firebase';

export enum AuthActionTypes {
  LoginUser = '[Auth] Login User',
  LogoutUser = '[Auth] Logout User'
}

export class LoginUserAction implements Action {
  readonly type = AuthActionTypes.LoginUser;

  constructor(public payload: { user: User }) {
  }
}

export class LogoutUserAction implements Action {
  readonly type = AuthActionTypes.LogoutUser;
}

export type AuthActions = LoginUserAction | LogoutUserAction;
