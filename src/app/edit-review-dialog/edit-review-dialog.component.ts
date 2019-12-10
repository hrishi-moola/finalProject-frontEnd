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
  selector: 'app-edit-review-dialog',
  template: `<button (click) = "createReview();"> Create/ Edit Review </button>`,
  styleUrls: ['./edit-review-dialog.component.css']
})
export class EditReviewDialogComponent implements OnInit {
  @Input() hotel_id: any;
  
  dialogRef : any;
  constructor(public dialog: MatDialog) {}

  createReview() {
    console.log("Registering");
    let dialogRef = this.dialog.open(EditReviewDialog,{      data: this.hotel_id
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
  constructor(){

  }
}

@Component({
  selector: 'review-dialog-example',
  templateUrl: 'edit-review-dialog.component.html',
  providers: [ ApiService ]

})
export class EditReviewDialog {
  responseData : string;
  review = new reviewInfo();
  hotelId : any;
  var : any;
  registerUser(){
    this.responseData = "";
    this.review.user = this.user.getUserName();
    this.review.date = Date.now().toString();
    this.review.hotel_id = this.hotelId.toString();
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
  constructor(public dialogRef: MatDialogRef<EditReviewDialog>, @Inject(MAT_DIALOG_DATA) public data: Number, private api: ApiService, private user: UserService) {
    this.hotelId = data;
  }
}