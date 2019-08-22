import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
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
