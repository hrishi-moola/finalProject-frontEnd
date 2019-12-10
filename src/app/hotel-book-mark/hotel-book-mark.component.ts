import { Component, OnInit, NgModule, Input, Inject } from '@angular/core';
import {MatDialogModule, MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ApiService } from '../api.service';
import { UserService } from '../user.service';

@NgModule({
  imports: [MatDialogModule]
})
@Component({
  selector: 'app-hotel-book-mark',
  template: `<button (click) = "viewBookmarks();"> Add and View Bookmarks </button>`,
  styleUrls: ['./hotel-book-mark.component.css']
})
export class HotelBookMarkComponent implements OnInit {
  @Input('hotel_id') hotelId : any;
  @Input('hotel_name') hotelName : any;
  constructor(public dialog: MatDialog, private api: ApiService, private user: UserService) {}

  viewBookmarks() {
    console.log("Calling for Bookmarks");
    this.api.insertAndFetchBookmarks(this.hotelId, this.user.getUserName(), this.hotelName).subscribe(
      r => {
        console.log(r);
        let likedHotels = r['output'];
        let dialogRef = this.dialog.open(BookmarksDialog, {
          data: likedHotels
            });
      },
      r => {
        // alert(r.error);
        alert(r.error);
      });
  }
  ngOnInit() {

  }

}


@Component({
  selector: 'bookmark-dialog-example',
  templateUrl: 'hotel-book-mark.component.html',
  providers: [ ApiService ]

})
export class BookmarksDialog {
  responseData : string;
  hotels : any;
  var : any;

  deleteReview(){
    this.responseData = "";
    console.table(this.hotels);
    this.var = this.api.clearBookmarks(this.user.getUserName()).subscribe(
      r => {
        console.log(r);
      },
      r => {
        alert(r.error);
      });
    // alert("There's a lot of backend processing happening right now, please be patient. Modal will disappear when it's complete.");
  }
  constructor(public dialogRef: MatDialogRef<BookmarksDialog>, @Inject(MAT_DIALOG_DATA) public data: any, private api: ApiService, private user: UserService) {
    this.hotels = data;
  }
}