import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private auth = false;

  constructor(
    private router : Router
  ) {

   }
  isAuthenticated () {
   return this.auth;
  }
  authenticate () {
   this.auth = true;
   this.router.navigate(["/dashbord"]);
  }

  logout () {
    this.auth = false;
    this.router.navigate(["/login"]);
  }

}
