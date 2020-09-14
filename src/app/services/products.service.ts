import { Injectable } from '@angular/core';
import { HttpClient, HttpParams  } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { environment } from '../../environments/environment.prod';

import { IProductResponse } from '../models/responses/ProductResponse';
import { IProductsResponse } from '../models/responses/ProductsResponse';
import { IProduct } from '../models/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService
{
  _endPoint: String = "api/v1/products";
  private static _imagesUrl: string = `${environment.baseUrl}/uploads/images/`;
  constructor(private http: HttpClient) { }

  public getProducts(): Observable<IProductsResponse>
  {
    return this.http.get<IProductsResponse>(`${environment.baseUrl}/${this._endPoint}`);
  }

  public getProductById(id: string): Observable<IProductResponse>
  {
    return this.http.get<IProductResponse>(`${environment.baseUrl}/${this._endPoint}/${id}`);
  }
  public getImagesUrl(): string
  {
    return ProductsService._imagesUrl;
  }



}
