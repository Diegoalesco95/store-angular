import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavComponent } from './components/nav/nav.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { ListProductsComponent } from './components/list-products/list-products.component';
import { ProductsHomeComponent } from './components/products-home/products-home.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { FormProductComponent } from './components/form-product/form-product.component';
import { ProductEditComponent } from './components/product-edit/product-edit.component';

const routes: Routes = [
  {
    path: '',
    component: NavComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent,
      },
      {
        path: 'shipping',
        component: ProductFormComponent,
      },
      {
        path: 'list',
        component: ListProductsComponent,
      },
      {
        path: 'products',
        component: ProductsHomeComponent,
        children: [
          {
            path: '',
            component: ProductListComponent,
          },
          {
            path: 'create',
            component: FormProductComponent,
          },
          {
            path: 'edit/:id',
            component: ProductEditComponent,
          },
        ],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
