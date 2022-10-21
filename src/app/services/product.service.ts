import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProducts } from '../model/product';

@Injectable({
  providedIn: 'root'
})

export class ProductService {
  API = `http://localhost:3000/products`

  constructor(private http: HttpClient) { }
  getProduct(_limit: number = 4, search_key: any = null): Observable<IProducts[]> {
    let url = `${this.API}/?_limit=${_limit}&_sort=id&_oder=desc`
    if (search_key != null) {
      url += '$name_like=' + search_key
    }
    return this.http.get<IProducts[]>(url)
  }

  getOne(id: number): Observable<any> {
    return this.http.get<any>(`${this.API}/${id}`)
  }

  create(data: any): Observable<IProducts> {
    return this.http.post<any>(this.API, data)
  }

  delete(id: Number): Observable<any> {
    return this.http.delete<any>(`${this.API}/${id}`)
  }

  update(id: number, data: any): Observable<any> {
    return this.http.put<any>(`${this.API}/${id}`, data)
  }

}
