import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { userExists } from 'src/app/shared/db-users';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  login(email, password) {
    
    if(userExists(email, password)){
      this.authService.authenticate();
     
    }
   

  }
  cancel() { }
}
