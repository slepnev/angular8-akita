import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { AppState } from './reducers';
import { Logout } from './auth/store/auth.actions';
import { Observable } from 'rxjs';
import { isLoggedIn, isLoggedOut } from './auth/store/auth.selectors';
import { Router } from '@angular/router';
import { AuthStore } from './auth/state/auth.store';
import { AuthQuery } from './auth/state/auth.query';
import { AuthService } from './auth/state/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  isLoggedIn$: Observable<boolean>;
  isLoggedOut$: Observable<boolean>;

  constructor(private authQuery: AuthQuery, private authService: AuthService, private routre: Router) {

  }

  ngOnInit() {
    this.isLoggedIn$ = this.authQuery.isLoggedIn$;
    this.isLoggedOut$ = this.authQuery.isLoggedOut$;
  }

  logout() {
    this.authService.logoutStore();
  }


}
