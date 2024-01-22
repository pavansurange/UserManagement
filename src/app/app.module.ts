import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserUpsertComponent } from './user-upsert/user-upsert.component';
import { RouterModule, Routes } from '@angular/router';
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
    RouterModule.forRoot(appRoute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
