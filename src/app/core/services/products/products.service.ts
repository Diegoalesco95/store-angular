import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Product } from '../../models/product.model';

import { environment } from 'src/environments/environment';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

interface User {
  email: string;
  gender: string;
  phone: string;
}

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private http: HttpClient) {}

  getAllProducts() {
    return this.http
      .get<Product[]>(environment.url_api)
      .pipe(catchError(this.handleError));
  }

  getProduct(id: string) {
    return this.http
      .get<Product>(`${environment.url_api}${id}`)
      .pipe(catchError(this.handleError));
  }

  createProduct(product: Product) {
    return this.http
      .post(`${environment.url_api}`, product)
      .pipe(catchError(this.handleError));
  }

  updateProduct(id: string, changes: Partial<Product>) {
    return this.http
      .put(`${environment.url_api}${id}`, changes)
      .pipe(catchError(this.handleError));
  }

  deleteProduct(id: string) {
    return this.http
      .delete(`${environment.url_api}${id}`)
      .pipe(catchError(this.handleError));
  }

  // Example for types requests

  getRandomUsers(): Observable<User[]> {
    return this.http.get('https://randomusersdfs.me/api/?results=2').pipe(
      catchError(this.handleError),
      map((response: any) => response.results as User[])
    );
  }

  private handleError(error: HttpErrorResponse) {
    // console.log(error);
    return throwError('Ups something went wrong');
  }
}
