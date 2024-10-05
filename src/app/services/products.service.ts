import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ProductModel } from '../models/product-model';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  
 

  constructor(private http: HttpClient) { }

  getAll(): Observable<ProductModel[]> {
    
    return this.http.get<ProductModel[]>(`${environment.ApiBaseUrl}/products`)
  }

   
  createProduct(newProduct: ProductModel): Observable<ProductModel>{
    return this.http.post<ProductModel>(`${environment.ApiBaseUrl}/products`, newProduct)
  }

  getProductById(productId: number) : Observable<ProductModel>{
    return this.http.get<ProductModel>(`${environment.ApiBaseUrl}/products/${productId}`)
  }

  editProduct(productId: number, product: any): Observable<ProductModel> {
    return this.http.put<ProductModel>(`${environment.ApiBaseUrl}/products/${productId}`, product)
  }
  
  deleteProduct(productId: number): Observable<ProductModel> {
    return this.http.delete<ProductModel>(`${environment.ApiBaseUrl}/products/${productId}`)
  }
}
