

import { Component, OnInit, ViewChild } from '@angular/core';
declare var google: any;


@Component({
  selector: 'app-g-maps',
  templateUrl: './g-maps.component.html',
  styleUrls: ['./g-maps.component.css']
})
export class GMapsComponent implements OnInit {

  constructor() { }
  @ViewChild('gMap', {static: false}) mapElement: any;
  map: any;

  ngOnInit() {
   console.log(1);
  }
  ngAfterViewInit(){
    console.log(google);
    setTimeout(()=> {
      var mapProp = {
        
        center: new google.maps.LatLng(37.79,-122.4),
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      };
      this.map = new google.maps.Map(this.mapElement.nativeElement, mapProp);
    });

  }
  // renderMap(){

    
  // }


}