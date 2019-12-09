import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';

@Component({
  selector: 'app-search-component',
  templateUrl: './search-component.component.html',
  styleUrls: ['./search-component.component.css']
})
export class SearchComponentComponent implements OnInit {

  selectedCity : string;
  searchString : string;
  searchBar = new FormControl();
  var : any;
  userInput = new FormControl();

  
  constructor(private api: ApiService, private router: Router) { 
    this.selectedCity = "";
    this.searchString = "";
  }
  @Input() displayCities: String[];
  @Input() displayHotels: string[];

  filteredOptions: Observable<string[]>;

  ngOnInit() {
    console.log(this.displayCities);
    console.log(this.displayHotels);
        
    this.filteredOptions = this.searchBar.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.displayHotels.filter(hotel => hotel.toLowerCase().indexOf(filterValue) === 0);
  }

  submitSearchString(){
    alert(this.searchString + " " + this.selectedCity);
     this.var = this.api.searchHotels(
      this.selectedCity,
      this.searchString
    ).subscribe(
      r => {
        console.log(JSON.parse(r));
      },
      r => {
        alert(r.error);
      });
  }

}
