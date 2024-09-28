import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductModel } from '../models/product-model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<ProductModel[]> {
    return this.http.get<ProductModel[]>('https://localhost:44391/products')
  }

  createProduct(newProduct: ProductModel): Observable<ProductModel>{
    return this.http.post<ProductModel>('https://localhost:44391/products', newProduct)
  }
}
8