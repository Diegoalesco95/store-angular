import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavComponent } from './components/nav/nav.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { ListProductsComponent } from './components/list-products/list-products.component';
import { ProductsHomeComponent } from './components/products-home/products-home.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { FormProductComponent } from './components/form-product/form-product.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';

const routes: Routes = [
  {
    path: '',
    component: NavComponent,
    children: [
      {
        path: 'login',
        component: LoginComponent,
      },
      {
        path: 'signup',
        component: SignupComponent,
      },
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
