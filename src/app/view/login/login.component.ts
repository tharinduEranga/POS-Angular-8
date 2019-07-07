import { Component, OnInit } from '@angular/core';
import {LoginService} from '../../services/login.service';
import {AdminDTO} from '../../dto/adminDTO';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private isIncorrect = false;
  constructor(private loginService: LoginService, private route: Router) { }

  ngOnInit() {
  }
  login(username, password) {
    this.loginService.login(new AdminDTO(username, password)).subscribe(resp => {
      this.loginService.setLogged();
      const promise = this.route.navigateByUrl('/dashboard');
    }, error => {
      console.log(error);
      if (error.status === 401) {
        this.isIncorrect = true;
      }
    });
  }
}
