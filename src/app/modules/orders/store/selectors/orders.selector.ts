import { createFeatureSelector, createSelector } from '@ngrx/store';
import { OrderState } from '../reducers/order.reducer';


export const orderState= createFeatureSelector<OrderState[]>('ordersState');

export const OrdersList = createSelector(
    orderState,
    (state) => {
        return state;
    }
);
