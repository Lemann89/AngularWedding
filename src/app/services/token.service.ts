import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { UserToken } from '../models/user-token.model';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  private subject: Subject<Boolean>;

  private isTokenValid: boolean;

  constructor() {
    this.subject = new Subject();
    if( localStorage.getItem('user-token') ) {
      this.isTokenValid = true;
    } else {
      this.isTokenValid = false;
    }
  }

  private notify() {
    this.subject.next(this.isTokenValid)
  }

  setToken(token: UserToken) {
    localStorage.setItem('user-token', JSON.stringify(token));
    this.isTokenValid = true;
    this.notify();
  }

  removeToken() {
    localStorage.removeItem('user-token');
    this.isTokenValid = false;
    this.notify();
  }

  getToken(): UserToken {
    return JSON.parse(localStorage.getItem('user-token')) as UserToken;
  }

  subscribeOnTokenChangeEvent( callback: (isTokenValid: boolean) => void) {
    this.subject.subscribe({ next: callback });
    this.notify();
  }
}
