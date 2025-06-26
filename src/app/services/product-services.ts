import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductServices {
  constructor(private http: HttpClient) {}
  private apiURL = 'https://dummyjson.com/products';

  getAllProducts(): Observable<any> {
    return this.http.get(`${this.apiURL}?limit=10`);
  }

  getProductByDetails(id: number): Observable<any> {
    return this.http.get(`${this.apiURL}/${id}`);
  }
}
