import { Actions, createEffect, ofType } from "@ngrx/effects";
import * as authActions from './auth.action'
import { Injectable } from "@angular/core";
import { catchError, exhaustMap, map, of, tap } from "rxjs";
import { AuthService } from "../auth.service";
import { User } from "../auth.model";
import { Store } from "@ngrx/store";
import { setLoadingSpinner } from "src/app/shared/store/shared.action";
import { ModalService } from "../auth.modal.service";
import { AppState } from "src/app/store/app.reducer";
import { Router } from "@angular/router";

@Injectable()

export class AuthEffects{

    constructor(
        private actions$: Actions,
        private authService: AuthService, 
        private store: Store<AppState>,
        private router: Router,
         ){

    }
    login$ = createEffect(()=>
        this.actions$.pipe(
            ofType(authActions.login),
            exhaustMap((action)=>{
                return this.authService.login(action.email, action.password).pipe(
                    tap((res)=>{
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
                        this.store.dispatch(setLoadingSpinner({status : false}))
                        // this.router.navigate(['/dashboard'])

                        return authActions.loginSuccess({user : user});
                    }),
                    catchError((err)=>{
                        
                        return of(authActions.loginFailure({errorMsg : err.error.error.message}));
                    })
                    
                )
            })
        )
    )
}