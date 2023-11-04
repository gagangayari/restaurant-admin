import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import * as loginActions from '../store/auth.action'
import { setLoadingSpinner } from 'src/app/shared/store/shared.action';
import { MatDialogRef } from '@angular/material/dialog';
import { Actions, ofType } from '@ngrx/effects';
import { Subscription, tap } from 'rxjs';
import { AppState } from 'src/app/store/app.reducer';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {


  //Doubtful about this subscription. Check if its fine
  loginSuccessSubscription: Subscription; 
  loginErrorSubscription: Subscription;
  loginError : boolean = false;
  errorMessage : String = "";

  loginForm : FormGroup = new FormGroup({
    username: new FormControl('username', [Validators.required, Validators.email]),
    password: new FormControl('password', [Validators.required]),
    
  })

  constructor(
    private actions$ : Actions,
    private store: Store<AppState>,
    private dialogRef: MatDialogRef<LoginComponent>
    ){

      this.loginSuccessSubscription = this.actions$.pipe(
        ofType(loginActions.loginSuccess),
      ).subscribe(()=> this.dialogRef.close());

      this.loginErrorSubscription = this.actions$.pipe(
        ofType(loginActions.loginFailure)
      ).subscribe((error)=>{
        this.loginError= true;
        this.errorMessage = error.errorMsg;
        
      })

  }
  login(){
    const email = this.loginForm.value.username;
    const password = this.loginForm.value.password;
    this.store.dispatch(setLoadingSpinner({status : true}))
    this.store.dispatch(loginActions.login({email: email, password: password}))
    

  }

  ngOnDestroy(){
    this.loginSuccessSubscription.unsubscribe();
  }

}
