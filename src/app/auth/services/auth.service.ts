import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private auth = true;

  constructor(
    private router : Router
  ) {

   }
  isAuthenticated () {
   return this.auth;
  }
  authenticate () {
   this.auth = true;
  }

  logout () {
    this.auth = false;
    this.router.navigate(["auth/login"]);
  }

}
