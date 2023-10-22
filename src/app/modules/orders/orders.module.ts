import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { orderReducer } from './store/reducers/order.reducer';
import { EffectsModule } from '@ngrx/effects';
import { OrderEffects } from './store/effects/order.effects';
import {MatIconModule} from '@angular/material/icon'



@NgModule({
  declarations: [],
  imports: [
    MatIconModule,
    CommonModule,
    StoreModule.forFeature('ordersState', orderReducer),
    // EffectsModule.forFeature([OrderEffects]),

    
  ]
})
export class OrdersModule { }
