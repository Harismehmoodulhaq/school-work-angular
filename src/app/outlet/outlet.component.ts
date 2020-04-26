import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/services/auth.service';

@Component({
  selector: 'app-outlet',
  templateUrl: './outlet.component.html',
  styleUrls: ['./outlet.component.scss']
})
export class OutletComponent implements OnInit {

  constructor(
    private auth : AuthService
  ) { }

  ngOnInit(): void {
  }

  logout () {
    this.auth.logout()
  }

}
