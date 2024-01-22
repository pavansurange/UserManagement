import { Injectable } from "@angular/core";
import { Observable, catchError, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { User } from "../models/user-model";

@Injectable()
export class UserService {
    //Declare Base Url to access data
  baseUrl = 'http://localhost:3000/User';
  constructor(private _httpClient: HttpClient) {

  }
// get Data from json server

  getUsers(): Observable<User[]> {
    return this._httpClient.get<User[]>(this.baseUrl).pipe(catchError(this.handleError));
  }
//Handling Error Response
  private handleError(errorResponse: HttpErrorResponse) {
    if (errorResponse.error instanceof ErrorEvent) {
      console.error('Client Side Error', errorResponse.error.message);
    } else {
      console.error('Server Side Error', errorResponse);
    }
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }  

  // Post HTTp Call

  addUser(user: User): any {
    try {

      return this._httpClient.post<User>(this.baseUrl, user, {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        })
      }).pipe(catchError(this.handleError));
    }
    catch (e) {
      console.log(e);
    }

  }
  getUser=(id:any) : Observable<User> => this._httpClient.get<User>(this.baseUrl+'/'+id).pipe(catchError(this.handleError));

  updateUser=(id:any,user:User) => this._httpClient.put(this.baseUrl+'/'+id,user).pipe(catchError(this.handleError));

  deleteUser(id: number) : Observable<void> {
    return this._httpClient.delete<void>(`${this.baseUrl}/${id}`)
    .pipe(catchError(this.handleError));
  }
}