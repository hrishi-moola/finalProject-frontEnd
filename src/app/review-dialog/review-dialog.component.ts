import { Component, OnInit, Output, EventEmitter, Input, Inject, NgModule } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ApiService } from '../api.service';
import { UserService } from '../user.service';
import { DialogDataExampleDialog } from '../functions-dialog/functions-dialog.component';

import {MatDialogModule} from '@angular/material/dialog';

@NgModule({
  imports: [MatDialogModule]
})
@Component({
  selector: 'app-review-dialog',
  template: `<button (click) = "createReview();"> Create Review </button>`,
  styleUrls: ['./review-dialog.component.css']
})
export class ReviewDialogComponent implements OnInit {
  @Input() hotel_id: any;
  
  dialogRef : any;
  constructor(public dialog: MatDialog) {}

  createReview() {
    console.log("Registering");
    let dialogRef = this.dialog.open(ReviewDialog,{      data: this.hotel_id
    });
        // dialogRef.afterClosed().subscribe(result =>{
        //   this.viewData.emit(result.data);
        //   console.log(result.data);
        // });
  }

  ngOnInit() {
  }
}



 class reviewInfo{
  title: string;
  reviewText: string;
  user: string;
  date: string;
  rating: number;
  hotel_id: number;
  action : string;;
  constructor(){

  }
}

@Component({
  selector: 'review-dialog-example',
  templateUrl: 'review-dialog.component.html',
  providers: [ ApiService ]

})
export class ReviewDialog {
  responseData : string;
  review = new reviewInfo();
  hotelId : any;
  var : any;
  registerUser(){
    this.responseData = "";
    this.review.user = this.user.getUserName();
    this.review.date = Date.now().toString();
    this.review.hotel_id = this.hotelId.toString();
    this.review.action = "reviewOp";
    console.table(this.review);
    this.var = this.api.reviewOperation(this.review).subscribe(
      r => {
        console.log(r);
      },
      r => {
        alert(r.error.error);
      });
    alert("There's a lot of backend processing happening right now, please be patient. Modal will disappear when it's complete.");
  }
  constructor(public dialogRef: MatDialogRef<ReviewDialog>, @Inject(MAT_DIALOG_DATA) public data: Number, private api: ApiService, private user: UserService) {
    this.hotelId = data;
  }
}