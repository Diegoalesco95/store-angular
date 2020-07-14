import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProductRoutingModule } from './product-routing.module';

import { ProductComponent } from './components/product/product.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ProductsComponent } from './components/products/products.component';

import { MaterialModule } from 'src/app/material/material.module';

@NgModule({
  declarations: [ProductComponent, ProductDetailComponent, ProductsComponent],
  imports: [CommonModule, SharedModule, ProductRoutingModule, MaterialModule],
})
export class ProductModule {}
