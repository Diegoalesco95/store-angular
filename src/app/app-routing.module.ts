import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { LayoutComponent } from './components/layout/layout.component';

import { AdminGuard } from './guards/admin/admin.guard';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
      {
        path: 'home',
        loadChildren: () =>
          import('./components/home/home.module').then((m) => m.HomeModule),
      },
      {
        path: 'products',
        canActivate: [AdminGuard],
        loadChildren: () =>
          import('./components/product/product.module').then(
            (m) => m.ProductModule
          ),
      },
      {
        path: 'order',
        loadChildren: () =>
          import('./components/order/order.module').then((m) => m.OrderModule),
      },
      {
        path: 'contact',
        canActivate: [AdminGuard],
        loadChildren: () =>
          import('./components/contact/contact.module').then(
            (m) => m.ContactModule
          ),
      },
      {
        path: 'demo',
        canActivate: [AdminGuard],
        loadChildren: () =>
          import('./components/demo/demo.module').then((m) => m.DemoModule),
      },
    ],
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('./admin/admin.module').then((m) => m.AdminModule),
  },
  {
    path: '**',
    loadChildren: () =>
      import('./components/page-not-found/page-not-found.module').then(
        (m) => m.PageNotFoundModule
      ),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
