import { Injectable } from '@angular/core';
import { User } from '../../model/user.model';
import { Store, StoreConfig } from '@datorama/akita';

export interface AuthState {
  loggedIn: boolean;
  user: User;
}

export const initialAuthState: AuthState = {
  loggedIn: false,
  user: undefined
};

@Injectable({
  providedIn: 'root'
})
@StoreConfig({name: 'auth'})
export class AuthStore extends Store<AuthState> {

  constructor() {
    super(initialAuthState);
  }
}
