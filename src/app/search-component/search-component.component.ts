import { Component, OnInit, Input, Output, EventEmitter, Inject } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material';
import { HotelSelectHandler } from './hotel-select-handler.service';

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

  
  constructor(private api: ApiService, private router: Router, public dialog: MatDialog) { 
    this.selectedCity = "";
    this.searchString = "";
  }

  @Input() displayCities: String[];
  @Input() displayHotels: string[];
  @Output() hotelInformation: EventEmitter<string> = new EventEmitter<string>();

  dialogRef : any;

  filteredOptions: Observable<string[]>;

  ngOnInit() {
      setTimeout( () => this.var = this.api.getQuerySelectors().subscribe(
      data =>{
        this.displayHotels = data.hotels.split(",");
        this.displayCities = data.cities.split(",");
      },
      error => {
        console.log(error);
      }
    ));
  }

  submitSearchString(){
    if(this.searchString != "" || this.selectedCity != ""){
      this.var = this.api.searchHotels(
        this.selectedCity,
        this.searchString
      ).subscribe(
        r => {
          console.log(r);
          let displayData = [];
          let something : any;
          something = r;
          for(var x in something){
            displayData.push(JSON.parse(r[x]));
          }
          let dialogRef = this.dialog.open(SearchResultsDialog, {
            data: displayData
              });
              dialogRef.afterClosed().subscribe(result =>{
                this.hotelInformation.emit(result.data);
                console.log(result.data);
                this.router.navigateByUrl('/hotelDetails',  {state: {data: result.data}});
              });
        },
        r => {
          alert(r.error);
        });
    }
  }
}


export interface SearchResult{
  hotelName : string;
  city: string;
  state: string;
  hotelId: number;
}

class hotelId{
  hotelId : string;
}

@Component({
  selector: 'dialog-data-example-dialog',
  templateUrl: 'search-results-dialog.component.html',
  providers: [ HotelSelectHandler ]
})
export class SearchResultsDialog {
  responseData : string;
  displayData : any;
  selectedOptions : any;
  @Input() displayInput : any;
  @Output() hotelInformation: EventEmitter<string> = new EventEmitter<string>();

  submitRequest(){
    this.responseData = "";
    console.log(this.selectedOptions[0]);
    this.hotelSelectHandler.getHotelData(this.selectedOptions[0].toString()).subscribe(
      data => {
        this.responseData = data as string ;	 // FILL THE ARRAY WITH DATA.
        this.dialogRef.close({data : this.responseData});
        this.hotelInformation.emit(this.responseData);
        console.log(this.responseData);
      },
      error => {
        console.log (error.message);
      }
    );
    alert("There's a lot of backend processing happening right now, please be patient. Modal will disappear when it's complete.");
  }

  constructor(public dialogRef: MatDialogRef<SearchResultsDialog>, @Inject(MAT_DIALOG_DATA) public data: any, private hotelSelectHandler: HotelSelectHandler) {
    console.log(data);
  }
}
