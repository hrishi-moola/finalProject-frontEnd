import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { TableFrameComponent } from './table-frame/table-frame.component';
import { MatTableModule, MatAutocomplete, MatAutocompleteModule } from '@angular/material';
import {MatSortModule} from '@angular/material/sort';
import {MatSelectModule} from '@angular/material';
import { MatExpansionModule} from  '@angular/material/expansion' ;
import { MatPaginatorModule } from '@angular/material';
import { MatFormFieldModule, MatInputModule, MatIconModule } from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatDividerModule } from '@angular/material';
import { MatDialogModule } from '@angular/material';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {MatChipInputEvent, MatChipsModule} from '@angular/material/chips';
import { QueryChipsComponent} from './query-chips-component/query-chips-component.component';
import { FunctionsDialogComponent, DialogDataExampleDialog } from './functions-dialog/functions-dialog.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import {NeedAuthGuard} from './auth.guard';
import { ApiService } from './api.service';
import { NewUserRegComponent, UserRegistrationDialog } from './new-user-reg/new-user-reg.component';


const appRoutes: Routes = [
  {
    path: 'login',
    component: LoginPageComponent
  },
  {
    path: 'landingPage',
    component: LandingPageComponent,
    canActivate: [NeedAuthGuard]

  },
];

@NgModule({
  declarations: [
    AppComponent,
    TableFrameComponent,
    QueryChipsComponent,
    FunctionsDialogComponent,
    DialogDataExampleDialog,
    LoginPageComponent,
    LandingPageComponent,
    NewUserRegComponent,
    UserRegistrationDialog
  ],
  entryComponents: [UserRegistrationDialog],

  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatExpansionModule,
    MatFormFieldModule, MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    FlexLayoutModule,
    MatDividerModule,
    MatChipsModule,
    MatIconModule,
    MatDialogModule,
    RouterModule.forRoot(appRoutes),
    MatAutocompleteModule
  ],
  providers: [NeedAuthGuard, ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
