import { HttpClient } from "@angular/common/http";
import { Injectable, NgModule } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable, interval } from "rxjs";
import { environment } from "src/environments/environment";
import { getidToken } from "./store/auth.selector";

@Injectable(
    {providedIn :'root'}
)
export class AuthService{

    isLoggedIn : boolean = false;

    loginUrl = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environment.apiKey}`
    constructor(private httpClient: HttpClient, private store: Store){
        this.store.select(getidToken).subscribe(token =>{
            if(token){
                this.isLoggedIn = true;
            }
            else{
                this.isLoggedIn = false;
            }
        })


    }

    login(email: string , password : string): Observable<any>{    
        return this.httpClient.post(this.loginUrl, 
            { email: email, password: password, returnSecureToken: true})



    }

    // isAuthenticated(): Observable<boolean>{
    // }


}