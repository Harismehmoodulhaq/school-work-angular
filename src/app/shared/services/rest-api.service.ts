// https://medium.com/@leseanbruneau/angular-8-restful-api-example-7ead962a2259


import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError,  map } from 'rxjs/operators';
import { User } from 'src/app/shared/models/user';
import { AuthService } from 'src/app/auth/services/auth.service';

@Injectable({
  providedIn: 'root'
})

export class RestApiService {
  
  
  apiURL = 'http://queno-staging.herokuapp.com/api/';

  constructor(
    private http: HttpClient,
    private authService : AuthService
    ) { }

  /*========================================
    CRUD Methods for consuming RESTful API
  =========================================*/

  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }  

 

  // HttpClient API post() method => Create login
  login(user:User): Observable<any>{
    return this.http.post(this.apiURL + 'login', user, this.httpOptions)
    .pipe(
      retry(1),
      map((res:any)=>{
        this.authService.authenticate(res);
        return res;
      }),
      catchError(this.handleError)
    )
  }  

 

 
 

  // Error handling 
  handleError(error) {
     let errorMessage = '';
     if(error.error instanceof ErrorEvent) {
       // Get client-side error
       errorMessage = error.error.message;
     } else {
       // Get server-side error
       errorMessage = `Error Code: ${error.code}\nMessage: ${error.message}`;
     }
     window.alert(errorMessage);
     return throwError(errorMessage);
  }

}

