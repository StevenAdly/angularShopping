import { NgModule } from '@angular/core';
import {RouterModule, Routes } from '@angular/router';
import {ProductsComponent} from './products/products.component';
import {MyOrdersComponent} from './my-orders/my-orders.component';
import {AdminOrdersComponent} from './admin/admin-orders/admin-orders.component';
import {AdminProductsComponent} from './admin/admin-products/admin-products.component';


const routes: Routes = [
  { path: 'products', component: ProductsComponent},
  { path: 'myOrders', component: MyOrdersComponent},
  { path: 'adminOrders', component: AdminOrdersComponent},
  { path: 'adminProducts', component: AdminProductsComponent},
];


@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule]
})
export class AppRoutingModule {}
