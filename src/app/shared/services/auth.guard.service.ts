import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthService } from '../../auth/services/auth.service';

@Injectable({
  providedIn:'root'
})
export class AuthGuardService implements CanActivate {

  constructor(
    public auth: AuthService, 
    public router: Router
    ) {}

  canActivate(): boolean {
    debugger
    if (!this.auth.isAuthenticated()) {
      this.router.navigate(['auth/login']);
      return false;
    }
    return true;
  }
}
