import {
  ActionReducerMap,
  MetaReducer
} from '@ngrx/store';
import {storeFreeze} from 'ngrx-store-freeze';

import {environment} from '../../environments/environment';
import {authReducer, AuthState} from '../auth/auth.reducer';

export interface AppState {
  auth: AuthState;
}

export const reducers: ActionReducerMap<AppState> = {
  auth: authReducer
};

export const metaReducers: MetaReducer<AppState>[] =
  !environment.production ? [storeFreeze] : [];
