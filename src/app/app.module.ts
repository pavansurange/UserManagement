import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserUpsertComponent } from './user-upsert/user-upsert.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from './user-list/user.service';
import { ReactiveFormsModule } from '@angular/forms';
const appRoute : Routes = [
  {path:"userlist", component: UserListComponent},
  {path:"adduser", component: UserUpsertComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserUpsertComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoute),
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
