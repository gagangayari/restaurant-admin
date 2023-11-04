import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoadSpinnerComponent } from './shared/components/load-spinner/load-spinner.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

const routes: Routes = [
  {path : '', component : LoadSpinnerComponent},
  {path :'products', loadChildren : () => import('../app/modules/products/products.module').then((m)=>m.ProductsModule)},
  {path :'orders', loadChildren : () => import('../app/modules/orders/orders.module').then((m) => m.OrdersModule)}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
