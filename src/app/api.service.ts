import {Injectable} from '@angular/core';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { constructor } from 'q';


 class LoginResultModel {
    token: string;
    auth: boolean;
    error: string;

    constructor(private tokenNew : string, private errorNew : string, private authNew : boolean){
        this.token = tokenNew;
        this.error = errorNew;
        this.auth = authNew;
      }
  }


  @Injectable({
    providedIn: 'root'
  })
  
export class ApiService {

    loginResult : any;

    constructor(private http: HttpClient) {

    }

    login(email: string, password: string):  Observable<LoginResultModel>{
    // this.loginResult =  new LoginResultModel("TOKEN", "");
    
    return this.http.post<LoginResultModel>('http://localhost:8090/auth/login', {
      email: email,
      password: password
    });
    // return this.loginResult;
  }

    regNewUser(userName: string, email: string, password: string):  Observable<LoginResultModel>{
      // this.loginResult =  new LoginResultModel("TOKEN", "");
      
      return this.http.post<LoginResultModel>('http://localhost:8090/auth/registration', {
        userName : userName,
        email: email,
        password: password
      });
    }
}