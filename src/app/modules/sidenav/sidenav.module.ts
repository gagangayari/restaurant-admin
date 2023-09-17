import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { OrderEffects } from '../orders/store/effects/order.effects';
import {reducer} from '../orders/store/reducers/order.reducer';
import { SidenavComponent } from './component/sidenav.component';
import { HttpClientModule } from '@angular/common/http';
import { SideNavRoutingModule } from './sidenav-routing.module';
// import { MatTableModule } from '@angular/material/table'




@NgModule({
  declarations: [
    SidenavComponent
  ],
  imports: [
    CommonModule,
    EffectsModule,
    HttpClientModule,
    SideNavRoutingModule,
    StoreModule.forFeature('orders',reducer),
    EffectsModule.forFeature([OrderEffects])
  ],
  exports: [SidenavComponent],
})
export class SideNaveModule { }
