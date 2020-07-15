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

@NgModule({
  declarations: [
    ProductFormComponent,
    NavComponent,
    DashboardComponent,
    ListProductsComponent,
    ProductListComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    MaterialModule,
  ],
})
export class AdminModule {}
