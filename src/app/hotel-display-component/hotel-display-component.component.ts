import { Component, OnInit } from '@angular/core';
import { HotelDataService } from './hotel-data.service';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-hotel-display-component',
  templateUrl: './hotel-display-component.component.html',
  styleUrls: ['./hotel-display-component.component.css']
})
export class HotelDisplayComponentComponent implements OnInit {

hotel : Observable<any>;
reviews : Observable<any>;
hotelId : any;
allData : any;
hotelDataRetrieved : boolean = false;
  constructor(private hotelDataService: HotelDataService) { }

  ngOnInit() {
    console.log(history.state.data);
    this.allData = history.state.data;
        var hotelInfo = {
          hotelName: this.allData.hotelInfo.name,
          address: this.allData.hotelInfo.addr,
          city: this.allData.hotelInfo.city,
          state: this.allData.hotelInfo.state,
               };
    this.hotel = of(hotelInfo);
    let reviewList : any;
    reviewList = this.allData.reviewList;
    let finalReviewList  = [];
    for(var x in reviewList){
      var ts = new Date(reviewList[x].reviewDate).toDateString();

      var reviewInfo = {
        title: reviewList[x].name,
        reviewText: reviewList[x].reviewText,
        user: reviewList[x].name,
        date: ts,
        rating: reviewList[x].averageRating
      }
      finalReviewList.push(reviewInfo);
    }
    this.reviews = of(finalReviewList);
    console.log(this.reviews);
  }


}
