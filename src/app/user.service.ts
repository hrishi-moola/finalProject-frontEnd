import {Injectable} from '@angular/core';

const TOKEN = 'TOKEN';
const USER = 'USER';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  setToken(token: string, user: string): void {
    localStorage.setItem(TOKEN, token);
    localStorage.setItem(USER, user);

  }

  isLogged() {
    return localStorage.getItem(TOKEN) != "";
  }
  getUserName() {
    return localStorage.getItem(USER).toString();
  }
}