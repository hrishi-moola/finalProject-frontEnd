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
import { LoginPageComponent } from './login-page/login-page.component';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import {NeedAuthGuard} from './auth.guard';
import { ApiService } from './api.service';
import { NewUserRegComponent, UserRegistrationDialog } from './new-user-reg/new-user-reg.component';
import { GMapsComponent } from './g-maps/g-maps.component';
import { SearchComponentComponent, SearchResultsDialog } from './search-component/search-component.component';
import {MatListModule} from '@angular/material/list';
import { HotelDisplayComponentComponent } from './hotel-display-component/hotel-display-component.component';
import {MatCardModule} from '@angular/material/card';
import { ReviewDialogComponent, ReviewDialog } from './review-dialog/review-dialog.component';
import { EditReviewDialogComponent, EditReviewDialog } from './edit-review-dialog/edit-review-dialog.component';

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
  {
    path: 'hotelDetails',
    component: HotelDisplayComponentComponent,
    canActivate: [NeedAuthGuard]

  }
];

@NgModule({
  declarations: [
    AppComponent,
    TableFrameComponent,
    QueryChipsComponent,
    LoginPageComponent,
    SearchResultsDialog,
    LandingPageComponent,
    NewUserRegComponent,
    UserRegistrationDialog,
    GMapsComponent,
    SearchComponentComponent,
    HotelDisplayComponentComponent,
    ReviewDialogComponent,
    EditReviewDialogComponent,
    EditReviewDialog,
  ReviewDialog,
  EditReviewDialogComponent  ],
  entryComponents: [UserRegistrationDialog, SearchResultsDialog, ReviewDialog, EditReviewDialog],

  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatExpansionModule,
    MatListModule,
    MatCardModule,
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
