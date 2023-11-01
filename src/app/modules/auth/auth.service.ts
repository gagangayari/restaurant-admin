import { HttpClient } from "@angular/common/http";
import { Injectable, NgModule } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable, interval } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable(
    {providedIn :'root'}
)
export class AuthService{

    loginUrl = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environment.apiKey}`
    constructor(private httpClient: HttpClient, private store: Store){

    }

    login(email: string , password : string): Observable<any>{    
        return this.httpClient.post(this.loginUrl, 
            { email: email, password: password, returnSecureToken: true})

    }

}