import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { USERS } from '../models/moks/users';

export class User { 
  "user": string
  "password": string;
  "active": boolean;
  "id": string; 
}

@Injectable({
  providedIn: 'root'
})


export class LoginService {
  private readonly API = 'https://6398885bfe03352a94d48ae5.mockapi.io/api/v1/';
  constructor(private readonly http: HttpClient) { }

  getUserMock(): Observable<any> {
    return of(USERS);  
}

  getUser() : Observable<[User]> {
    return this.http.get<[User]>(this.API + 'users');
  }

  postUser(user: User): Observable<User> {
    user.id = '';
    return this.http.post<User>(this.API + 'users', user)
      .pipe(
        catchError(this.handleError)
      );
  }
  private handleError(err: any) {
    let errorMessage: string;
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      errorMessage = `Backend returned code ${err.status}: ${err.body.error}`;
    }
    console.error(err);
    return throwError(() => errorMessage);
  }
  

}


