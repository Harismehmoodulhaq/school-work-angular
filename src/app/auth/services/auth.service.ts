import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  // private auth = false;
  private token = ''
  constructor(
    private router: Router
  ) {

    debugger
    this.token = localStorage.getItem('token')

  }
  isAuthenticated() {
   // here we should again hit server with this token to verify the token
    return !!this.token;
  }
  authenticate(res) {
    if (res.code === 200) {
      this.token = res.token;
      debugger
      localStorage.setItem('token', res.token);
      localStorage.setItem('user', JSON.stringify(res.user[0]|| '{}'));
      this.router.navigate(["/dashbord"]);
    } else {
      this.router.navigate(["/auth/login"])
    }
  }

  logout() {
    this.token = '';
    localStorage.setItem('token', '');
    localStorage.setItem('user', '{}');
    this.router.navigate(["/auth/login"]);
  }

}
