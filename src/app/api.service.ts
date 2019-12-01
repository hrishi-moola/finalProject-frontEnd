import {Injectable} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})


export class LoginResultModel {
    token: string;
    error: string;

    constructor(private tokenNew : string, private errorNew : string){
        this.token = tokenNew;
        this.error = errorNew;
      }
  }


export class ApiService {

    loginResult : any;


  login(email: string, password: string){
    this.loginResult =  new LoginResultModel("TOKEN", "");
    return this.loginResult;
  }
}