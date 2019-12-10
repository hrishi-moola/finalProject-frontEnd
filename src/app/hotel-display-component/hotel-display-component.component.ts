import { Component, OnInit } from '@angular/core';
import { HotelDataService } from './hotel-data.service';
import { Observable, of} from 'rxjs';
import { UserService } from '../user.service';

@Component({
  selector: 'app-hotel-display-component',
  templateUrl: './hotel-display-component.component.html',
  styleUrls: ['./hotel-display-component.component.css']
})
export class HotelDisplayComponentComponent implements OnInit {

hotel : Observable<any>;

cachedData : any;
reviewsLiked : any;
reviewLikes : Observable<any>;
hotelLike : Observable<any>;
reviews : Observable<any>;
hotelId : any;
allData : any;
hotelDataRetrieved : boolean = false;
  constructor(private hotelDataService: HotelDataService, private userService: UserService) { }

  ngOnInit() {
    console.log(history.state.data);
    this.allData = history.state.data;
        var hotelInfo = {
          hotelName: this.allData.hotelInfo.name,
          address: this.allData.hotelInfo.addr,
          hotelId: this.allData.hotelInfo.hotel_id,
          city: this.allData.hotelInfo.city,
          state: this.allData.hotelInfo.state,
          latitude: this.allData.hotelInfo.latitude,
          longitude: this.allData.hotelInfo.longitude,
               };
      let reviewsLiked : any;
      this.hotelDataService.getLikedReviews(hotelInfo.hotelId.toString(),this.userService.getUserName()).subscribe(
        r=> {
          this.hotel = of(hotelInfo);
          let reviewList : any;
          this.reviewsLiked = r['output'];
          reviewList = this.allData.reviewList;
          let finalReviewList  = [];
          for(var x in reviewList){
            var ts = new Date(parseInt(reviewList[x].reviewDate)).toDateString();
            var reviewInfo = {
              title: reviewList[x].title,
              reviewText: reviewList[x].reviewText,
              user: reviewList[x].user,
              hotelId: reviewList[x].hotel_id,
              date: ts,
              reviewId : reviewList[x].review_id,
              rating: reviewList[x].averageRating,
              reviewLike : false,
              canEdit: false
            }
            if(reviewInfo.user == this.userService.getUserName())
              reviewInfo.canEdit = true;
            if(r['output'].includes(reviewInfo.reviewId)){
              reviewInfo.reviewLike = true;
            }
            finalReviewList.push(reviewInfo);
            this.reviews = of(finalReviewList);
          }
        }, r=> {
          console.log("oops");
        }
      );


    console.log(this.reviews);
  }

  toggleReviewLike(reviewId : any, reviewLike : any){
    let userName = this.userService.getUserName();
    this.hotelDataService.toggleReviewLike(reviewId, userName, reviewLike).subscribe(
      r=>{
        console.log(r);
        if(reviewLike === true)
        delete(this.reviewsLiked[reviewId]);
        else
          this.reviewsLiked.push(reviewId);
        let reviewList : any;
        reviewList = this.allData.reviewList;
        let finalReviewList  = [];
        for(var x in reviewList){
          var ts = new Date(parseInt(reviewList[x].reviewDate)).toDateString();
          var reviewInfo = {
            title: reviewList[x].title,
            reviewText: reviewList[x].reviewText,
            user: reviewList[x].user,
            hotelId: reviewList[x].hotel_id,
            date: ts,
            reviewId : reviewList[x].review_id,
            rating: reviewList[x].averageRating,
            reviewLike : false
          }

          if(this.reviewsLiked.includes(reviewInfo.reviewId)){
            reviewInfo.reviewLike = true;
          }
          finalReviewList.push(reviewInfo);
          this.reviews = of(finalReviewList);
        }
        }, 
      r => {
        console.log("something failed " + r);
      }
    )
    alert("Gotta act on this one !" + reviewId + " " + userName + " " + reviewLike);
  }
  toggleHotelLike(hotelId : any, userName : any){
    this.hotelDataService.addHotelLike(hotelId, userName).subscribe(
      r=>{
        console.log(r);
      }, 
      r => {
        console.log("something failed");
      }
    )
}

}
