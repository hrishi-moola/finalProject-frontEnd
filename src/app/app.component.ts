import { Component } from '@angular/core';
import {Router} from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'APP';

  constructor(private router: Router) {
  }

  logout(){
      console.log("tryna logout");
      localStorage.TOKEN = "";
      this.router.navigateByUrl('/login');
      console.log("shouldve logout");

  }
}
