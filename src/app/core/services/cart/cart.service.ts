import { Injectable } from '@angular/core';
import { Product } from '../../models/product.model';

import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private products: Product[] = [];
  private cart = new BehaviorSubject<Product[]>([]);

  cart$ = this.cart.asObservable();

  constructor() {}

  addCart(product: Product) {
    this.products = [...this.products, product];
    this.cart.next(this.products);
  }

  deleteCart(product: Product) {
    const index = this.products.indexOf(product);
    this.products.splice(index, 1);
    this.cart.next(this.products);
  }
}
