import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductServices {
  constructor(private http: HttpClient) {}
  //   private apiURL = 'https://dummyjson.com/products';
  private apiURL = 'https://68351b82cd78db2058c04649.mockapi.io/products';

  getAllProducts(): Observable<any> {
    return this.http.get(`${this.apiURL}`);
  }

  getProductByDetails(id: number): Observable<any> {
    return this.http.get(`${this.apiURL}/${id}`);
  }

  addProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(`${this.apiURL}`, product);
  }
}
