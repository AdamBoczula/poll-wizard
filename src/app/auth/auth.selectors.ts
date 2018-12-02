import {AuthState} from './auth.reducer';
import {AppState} from '../reducers';
import {createSelector, MemoizedSelector, select} from '@ngrx/store';

export const selectAuthState = (state: AppState): AuthState => state.auth;

export const isLoggedIn: MemoizedSelector<AppState, boolean> = createSelector(
  selectAuthState,
  (auth: AuthState) => auth.isLoggedIn
);

export const isLoggedOut: MemoizedSelector<AppState, boolean> = createSelector(
  isLoggedIn,
  (loggedIn: boolean) => !loggedIn
);
