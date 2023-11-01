import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import * as loginActions from '../store/auth.action'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {




  loginForm : FormGroup = new FormGroup({
    username: new FormControl('username', [Validators.required, Validators.email]),
    password: new FormControl('password', [Validators.required]),
    
  })

  constructor(private store: Store){

  }
  login(){
    console.log("loggginn");
    
    const email = this.loginForm.value.username;
    const password = this.loginForm.value.password;

    this.store.dispatch(loginActions.login({email: email, password: password}))
    

  }

}
