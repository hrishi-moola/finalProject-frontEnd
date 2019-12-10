import {Injectable} from '@angular/core';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { constructor } from 'q';


const dropWizardUrl: string = "http://localhost:8090";

  @Injectable({
    providedIn: 'root'
  })
  
export class HotelDataService {

    loginResult : any;

    constructor(private http: HttpClient) {

    }

    getHotelData(hotelId: string): Observable<any> {
        return this.http.post(dropWizardUrl + "/hotels/details", {
          hotelId: hotelId
        });
      }

    addReview(reviewInfo : any){
        return this.http.post(dropWizardUrl + "/hotels/reviews", JSON.stringify(reviewInfo));
    }  

    toggleReviewLike(review : any, userName : any, reviewLike : any){
        return this.http.post(dropWizardUrl + "/hotels/reviews", {
            action: "toggleReviewLike",
            review_id : review,
            userName : userName,
            reviewLike : reviewLike
        });
    }

    getLikedReviews(hotel_id : any, userName : any){
        return this.http.post(dropWizardUrl + "/hotels/reviews", {
            action: "getLikedReviews",
            hotel_id : hotel_id,
            userName : userName
        });
    }

    addHotelLike(review : any, userName : any){
        return this.http.post(dropWizardUrl + "/hotels/reviews", {
            action: "addHotelLike",
            hotel_id : review,
            userName : userName
        });
    }

    getLikedHotels(userName : any){
        return this.http.post(dropWizardUrl + "/hotels/reviews", {
            action: "getHotelLikes",
            userName : userName
        });
    }

    clearLikedHotels(userName : any, reviewLike : any){
        return this.http.post(dropWizardUrl + "/hotels/reviews", {
            action: "clearHotels",
            userName : userName
        });
    }
}