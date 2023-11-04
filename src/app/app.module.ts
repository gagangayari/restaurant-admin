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


import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { MatTableModule } from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {ReactiveFormsModule} from '@angular/forms';
import {MatDialogModule} from '@angular/material/dialog'







import { appReducer } from './store/app.reducer';
import { AuthModule } from './modules/auth/auth.module';
import { AuthEffects } from './modules/auth/store/auth.effects';
import { SharedModule } from './shared/shared.module';
import { SidenavComponent } from './modules/sidenav/component/sidenav.component';
import { HttpClientModule } from '@angular/common/http';
import { OrderEffects } from './modules/orders/store/effects/order.effects';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavBarComponent,
    DashboardComponent,
    SidenavComponent,
  ],
  imports: [
    AuthModule,
    HttpClientModule,
    SharedModule,
    StoreModule.forRoot(appReducer),
    EffectsModule.forRoot([AuthEffects]),
    MatTableModule,
    BrowserModule,
    MatInputModule,
    MatCardModule,
    AppRoutingModule,
    MatIconModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatDialogModule,
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
  ],
  exports : [],
  providers: [provideAnimations()],
  bootstrap: [AppComponent]
})
export class AppModule { }
