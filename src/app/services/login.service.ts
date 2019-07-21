import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {apiurl, Operaions} from '../util/common';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private loginUrl = apiurl + 'admin';
  constructor(private httpClient: HttpClient) {
  }
  public login(adminDTO): Observable<any> {
    const httpHeaders = new HttpHeaders({
      operation: String(Operaions.login)
    });
    return this.httpClient.post<any>(this.loginUrl, adminDTO, {headers: httpHeaders});
  }
  setLogged() {
    localStorage.setItem('userData', 'true');
  }
  isLogged() {
    // return false;
    return localStorage.getItem('userData') != null ;
  }
}
