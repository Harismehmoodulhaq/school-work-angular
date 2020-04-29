import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { userExists } from 'src/app/shared/db-users';
import { Router } from '@angular/router';
import { RestApiService } from '../../shared/services/rest-api.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private router: Router,
    private rest: RestApiService,
  ) { }

  ngOnInit(): void {
  }

  login(username, pinCode) {
    this.rest.login({
      username,
      pinCode
   
    })
      .subscribe((user) => {
        // show toast
      })
  }
  cancel() { }
  logout() {
    this.authService.logout()
  }
}
