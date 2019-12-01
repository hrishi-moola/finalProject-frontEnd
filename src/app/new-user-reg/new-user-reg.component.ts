import { Component, OnInit, Input, Output, EventEmitter, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { DialogDataExampleDialog } from '../functions-dialog/functions-dialog.component';

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
  selectorData : Map<String,String>;
  user = new userDetails();

  @Output() tableContents: EventEmitter<string> = new EventEmitter<string>();

  registerUser(){
    this.responseData = "";
    console.table(this.user);
    // this.querySelectHandler.runSelectQuery(this.selectorData).subscribe(
    //   data => {
    //     this.responseData = data as string ;	 // FILL THE ARRAY WITH DATA.
    //     this.dialogRef.close({data : this.responseData});
    //     this.tableContents.emit(this.responseData);
    //     console.log(this.responseData);
    //   },
    //   error => {
    //     console.log (error.message);
    //   }
    // );
    alert("There's a lot of backend processing happening right now, please be patient. Modal will disappear when it's complete.");
  }
  constructor(public dialogRef: MatDialogRef<DialogDataExampleDialog>, @Inject(MAT_DIALOG_DATA) public data: Map<String, String>) {
    this.selectorData = data;
  }
}
