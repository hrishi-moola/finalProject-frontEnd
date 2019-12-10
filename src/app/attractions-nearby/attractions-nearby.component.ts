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
      // this.api.getAttractionsFromPapaGoog(this.hotel).subscribe(
      //   r => {
          // this.markers = r['results'];
          // var payload = r['results'];
          setTimeout(()=>{var marker;
            var position = new google.maps.LatLng(this.hotel.latitude, this.hotel.longitude);
            var request = {
            location: position,
            radius: '2000',
            query: 'tourist attractions in ' + this.hotel.address,
          };
            var mapProp = {
              center: new google.maps.LatLng(37.79,-122.4),
              zoom: 15,
              mapTypeId: google.maps.MapTypeId.ROADMAP
            };
              this.map = new google.maps.Map(this.mapElement.nativeElement, mapProp);
              var infoWindow = new google.maps.InfoWindow()
              // var position = new google.maps.LatLng(this.hotel.latitude, this.hotel.longitude);
              marker = new google.maps.Marker({
                  position: position,
                  map: this.map,
                  title: name
              });
          let service = new google.maps.places.PlacesService(this.map);
          service.textSearch(request, (results, status) =>{
            if (status == google.maps.places.PlacesServiceStatus.OK) {
              for (var i = 0; i < results.length; i++) {
                var place = results[i];
                console.log(results[i]);
              }
            }
          });
        });
          // for(var i in payload){
          //   var mapProp = {
          //     center: new google.maps.LatLng(37.79,-122.4),
          //     zoom: 15,
          //     mapTypeId: google.maps.MapTypeId.ROADMAP
          //   };
          //   var latitude = payload[i].geometry.location.lat;
          //   var longitude = payload[i].geometry.location.lng;
          //   var icon = payload[i].icon;
          //   var addr = payload[i].formatted_address;
          //   var name = payload[i].name;
          //   var marker;
          //   this.map = new google.maps.Map(this.mapElement.nativeElement, mapProp);
          //     var infoWindow = new google.maps.InfoWindow()
          //     var position = new google.maps.LatLng(latitude, longitude);
          //     marker = new google.maps.Marker({
          //         position: position,
          //         map: this.map,
          //         title: name,
          //         icon: icon
          //     });
          //     google.maps.event.addListener(marker, 'click', (function(marker, i) {
          //         return function() {
          //             infoWindow.setContent('<h2>' + name+'</h2> <h3>' + .addr+' </h3>');
          //             infoWindow.open(this.map, marker);
          //         }
          //     })(marker, i));
          // }
        // }, r=> {
        //   alert("error");
        //   console.log(r);
        // }
  
      // )
    
  }

  ngAfterViewInit(){
    console.log(google);
  }
}


