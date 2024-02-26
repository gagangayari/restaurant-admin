import { createFeatureSelector, createSelector } from "@ngrx/store";

export const productsState = createFeatureSelector("productsState")


export const ProductsList = createSelector(
    productsState,
    (state) => {
        return state ;
    }
);