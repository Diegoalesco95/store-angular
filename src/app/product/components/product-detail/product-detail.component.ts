import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { ProductsService } from '@core/services/products/products.service';
import { Product } from '@core/models/product.model';
// import * as FileSaver from 'file-saver';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent implements OnInit {
  product$: Observable<Product>;

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService
  ) {}

  ngOnInit() {
    this.product$ = this.route.params.pipe(
      switchMap((params: Params) => this.productsService.getProduct(params.id))
    );
  }

  // createProduct() {
  //   const newProduct: Product = {
  //     id: '009',
  //     title: 'Handcrafted Granite Bike',
  //     image: 'assets/images/stickers2.png',
  //     price: 163.0,
  //     description: 'Ut quam totam nam vitae et',
  //   };
  //   this.productsService.createProduct(newProduct).subscribe((product) => {
  //     console.log(product);
  //   });
  // }

  // updateProduct() {
  //   const editProduct: Partial<Product> = {
  //     title: 'Practical Rubber Ball',
  //     price: 210.0,
  //     description:
  //       'Eos laborum debitis ut et consequatur. Beatae qui rerum explicabo aut velit hic aut necessitatibus. Quia et et. Quibusdam qui non in numquam veritatis hic explicabo culpa.',
  //   };
  //   this.productsService
  //     .updateProduct('009', editProduct)
  //     .subscribe((product) => {
  //       console.log(product);
  //     });
  // }

  // deleteProduct() {
  //   this.productsService.deleteProduct('009').subscribe((answer) => {
  //     console.log(answer);
  //   });
  // }

  // // Example for types requests

  // getRandomUsers() {
  //   this.productsService.getRandomUsers().subscribe(
  //     (users) => {
  //       console.log(users);
  //     },
  //     (error) => {
  //       console.error(error);
  //     }
  //   );
  // }

  // // Example for get a file

  // getFile() {
  //   this.productsService.getFile().subscribe((content) => {
  //     const file = new File([content], 'Test.txt', {
  //       type: 'text/plain;charset=utf-8',
  //     });
  //     FileSaver.saveAs(file);
  //   });
  // }
}
