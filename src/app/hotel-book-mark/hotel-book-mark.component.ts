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
  @Input('hotel_id') hoteId : any;

  constructor(public dialog: MatDialog) {}

  viewBookmarks() {
    console.log("Registering");

    let dialogRef = this.dialog.open(BookmarksDialog,{ data: this.reviewInfo
    });
  }
  ngOnInit() {
  }

}



@Component({
  selector: 'review-dialog-example',
  templateUrl: 'edit-review-dialog.component.html',
  providers: [ ApiService ]

})
export class BookmarksDialog {
  responseData : string;
  hotelId : any;
  var : any;
  registerUser(){
    this.responseData = "";
    this.var = this.api.editReviewOperation(this.review).subscribe(
      r => {
        console.log(r);
      },
      r => {
        alert(r.error.error);
      });
    alert("There's a lot of backend processing happening right now, please be patient. Modal will disappear when it's complete.");
  }

  deleteReview(){
    this.responseData = "";
    console.table(this.review);
    this.var = this.api.deleteReviewOperation(this.review).subscribe(
      r => {
        console.log(r);
      },
      r => {
        alert(r.error.error);
      });
    alert("There's a lot of backend processing happening right now, please be patient. Modal will disappear when it's complete.");
  }
  constructor(public dialogRef: MatDialogRef<BookmarksDialog>, @Inject(MAT_DIALOG_DATA) public data: any, private api: ApiService, private user: UserService) {
    
    this.review = data;
  }
}