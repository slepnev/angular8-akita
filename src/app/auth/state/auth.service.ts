import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../../model/user.model';
import { AuthStore } from './auth.store';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private authStore: AuthStore) {

  }

  init() {
    const userData = localStorage.getItem('user');

    if (userData) {
      this.loginStore(JSON.parse(userData));
    } else {
      this.logoutStore();
    }
  }

  login(email: string, password: string): Observable<User> {
    return this.http.post<User>('/api/login', {email, password});
  }

  loginStore(user) {
    this.authStore.update(state => ({
      loggedIn: true,
      user
    }));
  }

  logoutStore() {
    this.authStore.update(state => ({
      loggedIn: false,
      user: undefined
    }));
  }

}
