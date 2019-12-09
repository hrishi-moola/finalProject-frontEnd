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
}