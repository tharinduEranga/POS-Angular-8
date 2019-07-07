import { Component } from '@angular/core';
import {Router} from '@angular/router';
import {LoginService} from './services/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'POS';
  constructor(private route: Router, private loginService: LoginService ) {
  }
  logout() {
    localStorage.removeItem('userData');
    this.route.navigate(['/login']);
    return true;
  }
  checkLoggde() {
    return this.loginService.isLogged();
  }
}

