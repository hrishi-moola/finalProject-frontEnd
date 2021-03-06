import {Injectable} from '@angular/core';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { constructor } from 'q';
import {LoginResultModel, QuerySelectorsModel } from '../models'
import { hostViewClassName } from '@angular/compiler';
let API_KEY = "AIzaSyDLKLQzmy-p1N5DjEdN4LaTaPbm8C4HqYs";
let HOST = "https://maps.googleapis.com";
let PATH = "/maps/api/place/textsearch/json";

  @Injectable({
    providedIn: 'root'
  })
  
export class ApiService {

    loginResult : any;

    constructor(private http: HttpClient) {

    }

    login(email: string, password: string):  Observable<LoginResultModel>{
    // this.loginResult =  new LoginResultModel("TOKEN", "");
    
    return this.http.post<LoginResultModel>('http://localhost:8090/auth/login', {
      email: email,
      password: password
    });
    // return this.loginResult;
  }

    regNewUser(userName: string, email: string, password: string):  Observable<LoginResultModel>{
      // this.loginResult =  new LoginResultModel("TOKEN", "");
      
      return this.http.post<LoginResultModel>('http://localhost:8090/auth/registration', {
        userName : userName,
        email: email,
        password: password
      });
    }

    searchHotels(city: string, searchString: string): Observable<string>{
      return this.http.post<string>('http://localhost:8090/hotels/search', {
        city: city,
        searchString: searchString,
      });
    }

    getQuerySelectors(): Observable<QuerySelectorsModel>{
      return this.http.get<QuerySelectorsModel>('http://localhost:8090/hotels/search');
    }

    insertAndFetchBookmarks(hotelId: any, userId:any, hotelName : any) : Observable<String> {
      return this.http.post<String>('http://localhost:8090/hotels/bookmarks', {
        action : "addAndFetchBookmarks",
        userName: userId.toString(),
        hotelId : hotelId.toString(),
        hotelName : hotelName.toString()
    });    
  }
  clearBookmarks(userId:any) : Observable<String> {
    return this.http.post<String>('http://localhost:8090/hotels/bookmarks', {
      action : "clearBookmarks",
      userName: userId.toString()
      });    
}
    reviewOperation(reviewInfo : any): Observable<String>{
      return this.http.post<String>('http://localhost:8090/hotels/reviews', {
        action : "reviewOp",
        reviewText: reviewInfo.reviewText,
        user: reviewInfo.user,
        rating: reviewInfo.rating.toString(),
        title: reviewInfo.title,
        hotel_id: reviewInfo.hotel_id.toString()
    });
    }


    editReviewOperation(reviewInfo : any): Observable<String>{
      return this.http.post<String>('http://localhost:8090/hotels/reviews', {
        action : "editReviewOp",
        reviewText: reviewInfo.reviewText,
        user: reviewInfo.user,
        rating: reviewInfo.rating.toString(),
        title: reviewInfo.title,
        hotel_id: reviewInfo.hotelId.toString(),
        review_id: reviewInfo.reviewId.toString()
    });
    }

    deleteReviewOperation(reviewInfo : any): Observable<String>{
      return this.http.post<String>('http://localhost:8090/hotels/reviews', {
        action : "deleteReviewOp",
        review_id: reviewInfo.reviewId.toString()
    });
    }

    getLandingPageMarkers():Observable<String>{
      return this.http.get<String>('http://localhost:8090/maps/markers')
    }

    
    // getAttractionsNearby(hotelId : any):Observable<String>{
    //   return this.http.post<String>('http://localhost:8090/maps/markers',{
    //     hotelId : hotelId
    //   });
      // https://maps.googleapis.com/maps/api/place/textsearch/json?query=tourist%20attractions+in+761%20Post%20Street&location=37.79,-122.41&radius=2000&key=AIzaSyDLKLQzmy-p1N5DjEdN4LaTaPbm8C4HqYs
      getAttractionsFromPapaGoog(hotel: any) {
        // var url = HOST + PATH + "?query=tourist%20attractions+in+" + hotel['address'].replace(" ", "%20") + "&location=" + hotel['latitude']+','+['longitude']+"&radius=2000&key=" + API_KEY;
        // return this.http.post<String>(url,{});
        
      }
      



}