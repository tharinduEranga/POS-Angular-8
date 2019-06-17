import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {ItemDTO} from '../dto/itemDTO';
import {Observable} from 'rxjs';
import {apiurl, Operaions} from '../util/common';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  constructor(public http: HttpClient) {
  }
  private itemsUrl = apiurl + 'item';
  getAllItems(): Observable<ItemDTO[]> {
    const httpHeaders = new HttpHeaders({
      operation: String(Operaions.getAll)
    });
    return this.http.get<ItemDTO[]>(this.itemsUrl, {headers: httpHeaders});
  }
  addItem(itemDTO): Observable<any> {
    const httpHeaders = new HttpHeaders({
      operation: String(Operaions.add)
    });
    return this.http.post<any>(this.itemsUrl, JSON.stringify(itemDTO), {headers: httpHeaders});
  }
  updateItem(itemDTO): Observable<any> {
    const httpHeaders = new HttpHeaders({
      operation: String(Operaions.update)
    });
    return this.http.put<any>(this.itemsUrl, JSON.stringify(itemDTO), {headers: httpHeaders});
  }
  searchItem(code): Observable<ItemDTO> {
    const httpHeaders = new HttpHeaders({
      operation: String(Operaions.search)
    });
    let httpParams = new HttpParams();
    httpParams = httpParams.append('code', code);
    return this.http.get<ItemDTO>(this.itemsUrl , {headers: httpHeaders, params: httpParams});
  }
  deleteItem(code): Observable<any> {
    const httpHeaders = new HttpHeaders({
      operation: String(Operaions.delete)
    });
    let httpParams = new HttpParams();
    httpParams = httpParams.append('code', code);
    return this.http.delete<any>(this.itemsUrl,  {headers: httpHeaders, params: httpParams});
  }
}
