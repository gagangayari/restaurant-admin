import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { orderReducer } from './store/reducers/order.reducer';
import {MatIconModule} from '@angular/material/icon'
import { OrdersComponent } from './component/orders/orders.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatTableModule } from '@angular/material/table';
import { OrdersRoutingModule } from './orders-routing.module';
import { MatButtonModule } from '@angular/material/button';
import { EffectsModule } from '@ngrx/effects';
import { OrderEffects } from './store/effects/order.effects';



@NgModule({
  declarations: [OrdersComponent],
  imports: [
    MatIconModule,
    CommonModule,
    SharedModule,
    MatTableModule,
    OrdersRoutingModule,
    MatButtonModule,
    StoreModule.forFeature('orders', orderReducer),
    EffectsModule.forFeature([OrderEffects]),

  ],
  exports : [OrdersComponent]
})
export class OrdersModule { }
