import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { ApiService } from '../api.service';
declare var google: any;



@Component({
  selector: 'app-attractions-nearby',
  templateUrl: './attractions-nearby.component.html',
  styleUrls: ['./attractions-nearby.component.css']
})
export class AttractionsNearbyComponent implements OnInit {

  constructor(private api : ApiService) { }
  @Input() hotel : any;
  markers : any;
  @ViewChild('nearbyMap', {static: false}) mapElement: any;
  map: any;

  ngOnInit() {
   console.log(1);
    
  }

  ngAfterContentInit(){
    setTimeout(()=>{var marker;
      var position = new google.maps.LatLng(this.hotel.latitude, this.hotel.longitude);
      var request = {
      location: position,
      radius: '2000',
      query: 'tourist attractions in ' + this.hotel.address,
    };
    marker = new google.maps.Marker({
        position: position,
        map: this.map,
        title: name
    });
      var mapProp = {
        center: position,
        zoom: 13,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      };
        this.map = new google.maps.Map(this.mapElement.nativeElement, mapProp);
        // var position = new google.maps.LatLng(this.hotel.latitude, this.hotel.longitude);

    let service = new google.maps.places.PlacesService(this.map);
    service.textSearch(request, (results, status) =>{
      if (status == google.maps.places.PlacesServiceStatus.OK) {
        var infoWindow = new google.maps.InfoWindow();
        for (var i = 0; i < results.length; i++) {
          var place = results[i];
          var latitude = place.geometry.location.lat;
          var longitude = place.geometry.location.lng;
          var icon = place.icon;
          var addr = place.formatted_address;
          var name = place.name;
        var contentString = '<h2 id = "name">' + name+'</h2> <h3 id = "lolol">' + addr+' </h3>';
        var position = new google.maps.LatLng(latitude(), longitude());
        marker = new google.maps.Marker({
            position: position,
            map: this.map,
            title: name,
            icon: icon
        });
        marker.addListener('click', function() {
          infoWindow.open(this.map, marker);
;              });
google.maps.event.addListener(marker, 'click', (function(marker, contentString) {
  return function() {
      infoWindow.setContent(contentString);
      infoWindow.open(this.map, marker);
  }
})(marker, contentString));
        }
      }
    });
  });  }
}


