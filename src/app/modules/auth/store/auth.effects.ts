import { Actions, createEffect, ofType } from "@ngrx/effects";
import * as authActions from './auth.action'
import { Injectable } from "@angular/core";
import { exhaustMap, map, of, tap } from "rxjs";
import { AuthService } from "../auth.service";
import { User } from "../auth.model";

@Injectable()

export class AuthEffects{

    constructor(private actions$: Actions, private authService: AuthService){

    }
    login$ = createEffect(()=>
        this.actions$.pipe(
            ofType(authActions.login),
            exhaustMap((action)=>{
                return this.authService.login(action.email, action.password).pipe(
                    tap((res)=>{
                        console.log("Loggin In",res);
                    }),
                    map((userDetails)=>{
                        const user : User = {
                            kind: userDetails.kind,
                            localId: userDetails.localId,
                            email: userDetails.email,
                            displayName: userDetails.displayName,
                            idToken: userDetails.idToken,
                            registered: userDetails.registered,
                            refreshToken: userDetails.refreshToken,
                            expiresIn: userDetails.expiresIn
                        }
                        return authActions.loginSuccess({user : user});
                    })
                    
                )
            })
            )
    )
}