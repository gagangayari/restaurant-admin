import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AuthState } from "./auth.reducer";

const getAuth = createFeatureSelector<AuthState>('auth');
export const getidToken = createSelector(getAuth, (state: AuthState) => {
    
    return state.user?.idToken

});