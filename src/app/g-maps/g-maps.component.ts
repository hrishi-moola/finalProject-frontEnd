

import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { ApiService } from '../api.service';
declare var google: any;



@Component({
  selector: 'app-g-maps',
  templateUrl: './g-maps.component.html',
  styleUrls: ['./g-maps.component.css']
})
export class GMapsComponent implements OnInit {

  constructor(private api : ApiService) { }
  @Input() markersType : any;
  markers : any;
  @ViewChild('gMap', {static: false}) mapElement: any;
  map: any;

  ngOnInit() {
   console.log(1);
      this.api.getLandingPageMarkers().subscribe(
        r => {
          this.markers = r['output'];
          setTimeout(()=> {
            var mapProp = {
              center: new google.maps.LatLng(37.79,-122.4),
              zoom: 10,
              mapTypeId: google.maps.MapTypeId.ROADMAP
            };
            var marker;
            this.map = new google.maps.Map(this.mapElement.nativeElement, mapProp);
            for( var i = 0; i < this.markers.length; i++ ) {
              var infoWindow = new google.maps.InfoWindow()
              var currentMarker = JSON.parse(this.markers[i]);
              var position = new google.maps.LatLng(currentMarker.latitude, currentMarker.longitude);
              marker = new google.maps.Marker({
                  position: position,
                  map: this.map,
                  title: currentMarker.name
              });
              google.maps.event.addListener(marker, 'click', (function(marker, i) {
                  return function() {
                      infoWindow.setContent('<h2>' + currentMarker.name+'</h2> <h3>' + currentMarker.addr+' </h3>');
                      infoWindow.open(this.map, marker);
                  }
              })(marker, i));
          }
          });
      
        }, r=> {
          alert("error");
          console.log(r);
        }
  
      )
    
  }

   
  ngAfterViewInit(){
    console.log(google);
  }
}