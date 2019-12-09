import { Component, OnInit } from '@angular/core';
import {ApiService} from '../api.service';
import {UserService} from '../user.service';

import {Router} from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  var : any;
  email = 'something';
  password = 'somethingeElse';

  constructor(private api: ApiService, private user: UserService, private router: Router) {
  }

  tryLogin() {
    this.user.setToken("token");
          this.router.navigateByUrl('/landingPage');
    // this.var = this.api.login(
    //   this.email,
    //   this.password
    // ).subscribe(
    //   r => {
    //     console.log(r);
    //     if (r.auth) {
    //       this.user.setToken(r.token);
    //       this.router.navigateByUrl('/landingPage');
    //     } else {
    //       alert(r.error);
    //     }
    //   },
    //   r => {
    //     alert(r.error);
    //   });
    // if (this.var.token) {
    //   this.user.setToken(this.var.token);
    //   this.router.navigateByUrl('/landingPage');
    // } else{
    //   alert(this.var.error);
    // }
    }




  ngOnInit() {
  }

}


