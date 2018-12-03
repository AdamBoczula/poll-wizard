import {TestBed, inject} from '@angular/core/testing';
import {provideMockActions} from '@ngrx/effects/testing';
import {noop, Observable} from 'rxjs';

import {AuthEffects} from './auth.effects';
import {Router} from '@angular/router';

describe('AuthEffects', () => {
  let actions$: Observable<any>;
  let effects: AuthEffects;

  beforeEach(() => {
    const router = {navigateByUrl: noop};
    actions$ = new Observable<any>();

    TestBed.configureTestingModule({
      providers: [
        AuthEffects,
        provideMockActions(() => actions$),
        {provide: Router, useValue: router}
      ]
    });

    effects = TestBed.get(AuthEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
