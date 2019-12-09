import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { DialogDataExampleDialog } from '../functions-dialog/functions-dialog.component';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-review-dialog',
  templateUrl: '<button (click) = "createReview();"> Create New Review </button>',
  styleUrls: ['./review-dialog.component.css']
})
export class ReviewDialogComponent implements OnInit {

  dialogRef : any;
  constructor(public dialog: MatDialog) {}

  registerNewUser() {
    console.log("Registering");
    let dialogRef = this.dialog.open(UserRegistrationDialog);
        // dialogRef.afterClosed().subscribe(result =>{
        //   this.viewData.emit(result.data);
        //   console.log(result.data);
        // });
  }

  ngOnInit() {
  }
}



export class reviewInfo{
  title: string;
  reviewText: string;
  user: string;
  date: string;
  rating: number;
  constructor(){

  }
}

@Component({
  selector: 'dialog-data-example-dialog',
  templateUrl: 'review_dialog.component.html',
  providers: [  ]

})
export class UserRegistrationDialog {
  responseData : string;
  review = new reviewInfo();

  var : any;
  // this.review.title,
  // this.review.reviewText,
  // this.review.rating.toString(),
  // this.review.user,
  // this.review.date,
  registerUser(){
    this.responseData = "";
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
  constructor(public dialogRef: MatDialogRef<DialogDataExampleDialog>, private api: ApiService) {
  }
}