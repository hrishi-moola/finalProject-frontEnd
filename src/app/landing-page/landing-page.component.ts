import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import {ApiService} from '../api.service';
import {QuerySelectorsModel} from '../../models'
import { startWith, map } from 'rxjs/operators';
import { Router } from '@angular/router';


export interface location {
  selection: string;
  displayName: string;
}



@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {


    //attach it the data using input

  selectedCity : string;
  searchString : string;
  searchBar = new FormControl();
  var : any;
  userInput = new FormControl();
  displayHotels : string[];
  displayCities : string[];
  inputParams : QuerySelectorsModel;

  hotelDetails : any;

  constructor(private api: ApiService, private router: Router) { 
    this.selectedCity = "";
    this.searchString = "";
  }

  filteredOptions: Observable<string[]>;

  ngOnInit() {

  }
}
