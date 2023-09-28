import { createFeatureSelector, createSelector } from '@ngrx/store';
import { OrderState, FeatureKey } from '../reducers/order.reducer';


export const orderState= createFeatureSelector<OrderState>('appState');

export const OrdersList = createSelector(
    orderState,
    (state) => {
        console.log(state.orders);
        
        
        return state.orders;
    }
);
