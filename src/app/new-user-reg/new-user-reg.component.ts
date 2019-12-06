import { Component, OnInit, Input, Output, EventEmitter, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { DialogDataExampleDialog } from '../functions-dialog/functions-dialog.component';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-new-user-reg',
  template: `<button (click) = "registerNewUser();"> Register New User </button>`,
  styleUrls: ['./new-user-reg.component.css']
})
export class NewUserRegComponent implements OnInit {

  @Output() viewData: EventEmitter<string> = new EventEmitter<string>();
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




export class userDetails{
  email : string;
  userName: string;
  password1 : string; 
  password2 : string; 

  constructor(){

  }
}

@Component({
  selector: 'dialog-data-example-dialog',
  templateUrl: 'new-user-reg.component.html',
  providers: [  ]

})
export class UserRegistrationDialog {
  responseData : string;
  userDetails = new userDetails();

  @Output() tableContents: EventEmitter<string> = new EventEmitter<string>();
  var : any;

  registerUser(){
    this.responseData = "";
    console.table(this.userDetails);
    this.var = this.api.regNewUser(
      this.userDetails.userName,
      this.userDetails.email,
      this.userDetails.password1
    ).subscribe(
      r => {
        console.log(r);
        if (r.auth) {
          alert("User registered Succesfully");
        }
      },
      r => {
        alert(r.error.error);
      });
    alert("There's a lot of backend processing happening right now, please be patient. Modal will disappear when it's complete.");
  }
  constructor(public dialogRef: MatDialogRef<DialogDataExampleDialog>, private api: ApiService) {
  }
}
