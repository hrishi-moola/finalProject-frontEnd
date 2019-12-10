import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, of } from 'rxjs';
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
export class LandingPageComponent implements OnInit, AfterViewInit {


    //attach it the data using input

  selectedCity : string;
  searchString : string;
  searchBar = new FormControl();
  var : any;
  userInput = new FormControl();
  displayHotels : string[];
  displayCities : string[];
  inputParams : QuerySelectorsModel;
  markers : "all";
  hotelDetails : any;

  constructor(private api: ApiService, private router: Router) { 
    this.selectedCity = "";
    this.searchString = "";
  }

  filteredOptions: Observable<string[]>;

  ngOnInit() {
  

  }

  ngAfterViewInit(){

  }
}
