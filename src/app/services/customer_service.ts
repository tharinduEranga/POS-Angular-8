import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {CustomerDTO} from '../dto/customerDTO';
import {Observable} from 'rxjs';
import {apiurl, Operaions} from '../util/common';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  constructor(public http: HttpClient) {
  }
  private customerurl = apiurl + 'customer';
  getAllCustomers(): Observable<CustomerDTO[]> {
    const httpHeaders = new HttpHeaders({
      operation: String(Operaions.getAll)
    });
    return this.http.get<CustomerDTO[]>(this.customerurl, {headers: httpHeaders});
  }
  addCustomer(customerDTO): Observable<any> {
    const httpHeaders = new HttpHeaders({
      operation: String(Operaions.add)
    });
    return this.http.post<any>(this.customerurl, JSON.stringify(customerDTO), {headers: httpHeaders});
  }
  updateCustomer(customerDTO): Observable<any> {
    const httpHeaders = new HttpHeaders({
      operation: String(Operaions.update)
    });
    return this.http.put<any>(this.customerurl, JSON.stringify(customerDTO), {headers: httpHeaders});
  }
  searchCustomer(cid): Observable<CustomerDTO> {
    const httpHeaders = new HttpHeaders({
      operation: String(Operaions.search)
    });
    let httpParams = new HttpParams();
    httpParams = httpParams.append('cid', cid);
    return this.http.get<CustomerDTO>(this.customerurl , {headers: httpHeaders, params: httpParams});
  }
  deleteCustomer(cid): Observable<any> {
    const httpHeaders = new HttpHeaders({
      operation: String(Operaions.delete)
    });
    let httpParams = new HttpParams();
    httpParams = httpParams.append('cid', cid);
    return this.http.delete<any>(this.customerurl,  {headers: httpHeaders, params: httpParams});
  }
}
