import { createReducer, on } from "@ngrx/store";
import * as Actions from "./products.action";
import { Product } from "../products.model";


export const initialState: ReadonlyArray<Product[]> = [];

export const productsReducer = createReducer(
    initialState,
    on(Actions.loadProductSuccess,(state, action) => {
        return action.products;
    })
     
)