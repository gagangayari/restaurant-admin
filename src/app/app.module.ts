import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

import { OrdersModule } from './modules/orders/orders.module';
// import { MatTableModule } from '@angular/material/table'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavBarComponent,
    // SidenavComponent,
    DashboardComponent
  ],
  imports: [
    StoreModule.forRoot([], {}),
    EffectsModule.forRoot([]),

    BrowserModule,
    AppRoutingModule,
    OrdersModule
    // MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
