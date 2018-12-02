import {ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Store, StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';

import * as fromAuth from './auth.reducer';
import {AuthEffects} from './auth.effects';
import {AuthGuard} from '../guards/auth.guard';
import {Router} from '@angular/router';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature('auth', fromAuth.authReducer),
    EffectsModule.forFeature([AuthEffects])
  ]
})
export class AuthModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: AuthModule,
      providers: [
        AuthGuard
      ]
    };
  }
}
