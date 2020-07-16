import { Component, OnInit, Input } from '@angular/core';
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

  addCart(product: Product) {
    this.cartService.addCart(product);
  }

  deleteCart(product: Product) {
    this.cartService.deleteCart(product);
  }
}
