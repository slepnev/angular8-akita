import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AuthQuery } from './state/auth.query';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authQuery: AuthQuery, private routre: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {

    return this.authQuery.isLoggedIn$
      .pipe(
        tap(loggedIn => {
          if (!loggedIn) {
            this.routre.navigateByUrl('/login');
          }
        })
      );

  }

}
