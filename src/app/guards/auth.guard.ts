import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';
import {select, Store} from '@ngrx/store';

import {AppState} from '../reducers';
import {isLoggedIn} from '../auth/auth.selectors';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private store: Store<AppState>, private router: Router) {
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.store.pipe(
      select(isLoggedIn),
      tap((loggedIn: boolean): void => {
        if (!loggedIn) {
          this.router.navigateByUrl('/');
        }
      })
    );
  }
}
