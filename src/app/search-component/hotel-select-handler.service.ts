
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHandler } from '@angular/common/http';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';


const dropWizardUrl: string = "http://localhost:8090";
import { HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Method' : 'POST'
  })
};

export interface RequestData {
    requestUrl: string;
    parameter: string;
    method: string;
  }

@Injectable()
export class HotelSelectHandler {
    constructor(private http: HttpClient) { 
    }
      getHotelData (hotelId: string): Observable<any> {
        return this.http.post(dropWizardUrl + "/hotels/details", {
          hotelId: hotelId,
          
        });
      }
      doLol(){
        return this.http.get(dropWizardUrl + "/request/selectQuery/LOL");
      }
}