import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ProductsService } from '@core/services/products/products.service';
import { Product } from '@core/models/product.model';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent implements OnInit {
  product: Product;

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      const id = params.id;
      this.fetchProduct(id);
      // this.product = this.productsService.getProduct(id);
    });
  }

  fetchProduct(id: string) {
    this.productsService.getProduct(id).subscribe((product) => {
      this.product = product;
    });
  }

  createProduct() {
    const newProduct: Product = {
      id: '009',
      title: 'Handcrafted Granite Bike',
      image: 'assets/images/stickers2.png',
      price: 163.0,
      description: 'Ut quam totam nam vitae et',
    };
    this.productsService.createProduct(newProduct).subscribe((product) => {
      console.log(product);
    });
  }

  updateProduct() {
    const editProduct: Partial<Product> = {
      title: 'Practical Rubber Ball',
      price: 210.0,
      description:
        'Eos laborum debitis ut et consequatur. Beatae qui rerum explicabo aut velit hic aut necessitatibus. Quia et et. Quibusdam qui non in numquam veritatis hic explicabo culpa.',
    };
    this.productsService
      .updateProduct('009', editProduct)
      .subscribe((product) => {
        console.log(product);
      });
  }

  deleteProduct() {
    this.productsService.deleteProduct('009').subscribe((answer) => {
      console.log(answer);
    });
  }
}
