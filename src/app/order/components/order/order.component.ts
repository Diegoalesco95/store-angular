import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/core/models/product.model';
import { CartService } from 'src/app/core/services/cart/cart.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss'],
})
export class OrderComponent implements OnInit {
  products$: Observable<Product[]>;
  displayedColumns: string[] = [
    'image',
    'title',
    'amount',
    'unit-price',
    'total-price',
    'actions',
  ];

  constructor(private cartService: CartService) {
    this.products$ = this.cartService.cart$;
  }

  ngOnInit(): void {}

  addCart(product: any) {
    product.quantity = 0;
    product.amount = 0;
    this.cartService.addCart(product);
  }

  deleteCart(product: any) {
    product.quantity--;
    product.amount = product.quantity * product.price;
    this.cartService.deleteCart(product);
  }

  getTotalQuantity(products: any) {
    return products
      .map((p: any) => p.quantity)
      .reduce((acc: any, value: any) => acc + value, 0);
  }

  getTotalPrice(products: any) {
    return products
      .map((p: any) => p.amount)
      .reduce((acc: any, value: any) => acc + value, 0);
  }
}
