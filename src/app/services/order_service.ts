import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {apiurl, Operaions} from '../util/common';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  constructor(public http: HttpClient) {
  }
  private orderUrl = apiurl + 'orders';
  addOrder(orderDTO): Observable<any> {
    const httpHeaders = new HttpHeaders({
      operation: String(Operaions.add)
    });
    return this.http.post<any>(this.orderUrl, orderDTO, {headers: httpHeaders});
  }
}
