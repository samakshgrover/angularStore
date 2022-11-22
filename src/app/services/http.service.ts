import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import {} from '@angular/'
import { data } from 'src/assets/db';
import { Observable } from 'rxjs';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private http: HttpClient) {}

  getData(): Observable<Product[]> {
    return this.http.get<Product[]>('http://localhost:3000/products');
  }

  getDataTemp() {
    return data.products;
  }
}
