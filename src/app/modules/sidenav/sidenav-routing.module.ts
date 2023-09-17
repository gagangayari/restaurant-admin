import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from '../products/component/product/product.component';
import { OrdersComponent } from '../orders/component/orders/orders.component';

const routes: Routes = [
    {path: 'products', component:  ProductComponent},
    {path: 'orders', component:  OrdersComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class SideNavRoutingModule { }
