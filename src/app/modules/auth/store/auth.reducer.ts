import { createReducer, on } from "@ngrx/store";
import { User } from "../auth.model";
import * as authActions from "./auth.action";
// import { state } from "@angular/animations";

export interface AuthState{
    user : User | null
}

export const initialState: AuthState = {
    user : null
    
}

export const authReducer = createReducer(
    initialState,
    on(authActions.loginSuccess,
    (state, action) =>{ 
        return {
        ...state,
        user: action.user
    }}),
    on(authActions.logout,
        (state, action)=>{
            return {
                ...state,
                user : null
        }
    })
)