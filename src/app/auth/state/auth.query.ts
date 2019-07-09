import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';
import { AuthState, AuthStore } from './auth.store';

@Injectable({
  providedIn: 'root'
})
export class AuthQuery extends Query<AuthState> {

  isLoggedIn$ = this.select(state => state.loggedIn);
  isLoggedOut$ = this.select(state => !state.loggedIn);

  constructor(protected store: AuthStore) {
    super(store);
  }
}
