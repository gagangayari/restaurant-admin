import { createReducer, on } from "@ngrx/store"
import { OrderState, orderReducer }  from "../modules/orders/store/reducers/order.reducer"


import { Order } from "../modules/orders/order.model";
import { Product } from "../modules/products/products.model";
import { sharedReducer } from "../shared/store/shared.reducer";
import { SharedState } from "../shared/store/shared.reducer";
import { featureKey } from "../shared/store/shared.selector";
import { AuthState, authReducer } from "../modules/auth/store/auth.reducer";
import { BrowserReload } from "./app.action";

export interface AppState{
    [featureKey]: SharedState,
    'auth': AuthState,
}

export const appReducer = {
    [featureKey] : sharedReducer,
    'auth': authReducer,
}


export const initialState: any = null;

export const productsReducer = createReducer(
    initialState,
    on(BrowserReload,(state, action) => {
        return state;
    })
     
)





