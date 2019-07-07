import { Component, OnInit } from '@angular/core';
import {LoginService} from '../../services/login.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private loginService: LoginService) { }

  ngOnInit() {
  }
  logout() {
    localStorage.removeItem('userData');
    return true;
  }
  checkLoggde() {
    return this.loginService.isLogged();
  }
}
