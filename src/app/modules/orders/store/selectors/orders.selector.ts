import { createFeatureSelector, createSelector } from '@ngrx/store';
import { OrderState, FeatureKey } from '../reducers/order.reducer';


export const orderState= createFeatureSelector<OrderState>('orders');

export const OrdersList = createSelector(
    orderState,
    (state) => {
        console.log("selector filed", state);
        
        return state;
    }
);
