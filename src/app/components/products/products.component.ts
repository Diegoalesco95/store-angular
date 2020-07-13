import { Component, OnInit } from '@angular/core';

import { Product } from '../product/product.model';
import { ProductsService } from '../../services/products/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  products: Product[];
  constructor(private productsService: ProductsService) {}

  ngOnInit() {
    this.products = this.productsService.getAllProducts();
  }

  clickProduct(id: number) {
    console.log('Product');
    console.log(id);
  }
}
