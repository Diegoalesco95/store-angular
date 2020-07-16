import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { NavComponent } from './components/nav/nav.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ListProductsComponent } from './components/list-products/list-products.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { FormProductComponent } from './components/form-product/form-product.component';
import { ProductsHomeComponent } from './components/products-home/products-home.component';

import { ProductEditComponent } from './components/product-edit/product-edit.component';

@NgModule({
  declarations: [
    ProductFormComponent,
    NavComponent,
    DashboardComponent,
    ListProductsComponent,
    ProductListComponent,
    FormProductComponent,
    ProductsHomeComponent,

    ProductEditComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    MaterialModule,
  ],
})
export class AdminModule {}
