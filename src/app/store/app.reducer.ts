import { createReducer } from "@ngrx/store"
import { reducer }  from "../modules/orders/store/reducers/order.reducer"


import { Order } from "../modules/orders/order.model";
import { Product } from "../modules/products/products.model";

export interface AppState{
    orders: Order
}

export const appReducer = {
    orders: reducer,
}