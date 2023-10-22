import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { environment } from '../environments/environment';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

import {  SideNaveModule } from './modules/sidenav/sidenav.module';

import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { MatTableModule } from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {ReactiveFormsModule} from '@angular/forms';







import { ProductsModule } from './modules/products/products.module';
import { OrdersComponent } from './modules/orders/component/orders/orders.component';
import { LoadSpinnerComponent } from './shared/components/load-spinner/load-spinner.component';
import { appReducer } from './store/app.reducer';
import { OrdersModule } from './modules/orders/orders.module';
import { LoginComponent } from './modules/auth/login/login.component';
import { AuthModule } from './modules/auth/auth.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavBarComponent,
    DashboardComponent,
    OrdersComponent,
    LoadSpinnerComponent,
    LoginComponent
  ],
  imports: [
    AuthModule,

    StoreModule.forRoot(appReducer),
    EffectsModule.forRoot([]),
    MatTableModule,
    BrowserModule,
    MatInputModule,
    MatCardModule,
    AppRoutingModule,
    MatButtonModule,
    SideNaveModule,
    ProductsModule,
    OrdersModule,
    MatIconModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
  ],
  providers: [provideAnimations()],
  bootstrap: [AppComponent]
})
export class AppModule { }
