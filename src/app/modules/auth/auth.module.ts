import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LoginComponent } from './login/login.component';

import {ReactiveFormsModule} from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { authReducer } from "./store/auth.reducer";
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { AuthInterceptor } from "./auth.interceptor";
import {MatDialogModule, MatDialogRef} from '@angular/material/dialog'






@NgModule({
    imports: [
      CommonModule,
      ReactiveFormsModule,
      MatCardModule,
      MatFormFieldModule,
      MatInputModule,
      MatButtonModule,
      MatDialogModule,
      EffectsModule.forFeature(),

      // StoreModule.forFeature('Auth', authReducer )


    ],
    declarations: [LoginComponent],
    exports : [LoginComponent],
    providers: [
      {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true},
      {provide: MatDialogRef, useValue: {}}
    ]
})
export class AuthModule{}
