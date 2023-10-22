import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

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
  login(){
    console.log(this.loginForm.value);
    

  }

}
