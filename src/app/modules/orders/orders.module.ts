import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { OrderEffects } from './store/effects/order.effects';
import {reducer} from './store/reducers/order.reducer';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    SidenavComponent
  ],
  imports: [
    CommonModule,
    EffectsModule,
    HttpClientModule,
    // MatTableModule,
    StoreModule.forFeature('orders',reducer),
    EffectsModule.forFeature([OrderEffects])
  ],
  exports: [SidenavComponent],
})
export class OrdersModule { }
