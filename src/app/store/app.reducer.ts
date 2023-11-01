import { createReducer } from "@ngrx/store"
import { orderReducer }  from "../modules/orders/store/reducers/order.reducer"


import { Order } from "../modules/orders/order.model";
import { Product } from "../modules/products/products.model";
import { sharedReducer } from "../shared/shared.reducer";
import { SharedState } from "../shared/shared.reducer";
import { featureKey } from "../shared/shared.selector";
import { AuthState, authReducer } from "../modules/auth/store/auth.reducer";

export interface AppState{
    [featureKey]: SharedState,
    'auth': AuthState
}

export const appReducer = {
    [featureKey] : sharedReducer,
    'auth': authReducer
}

