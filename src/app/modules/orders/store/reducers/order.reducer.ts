import { Action, createReducer, on } from '@ngrx/store';
import * as Actions from '../actions/order.actions';
import { Order } from '../../order.model';

export const FeatureKey = '';

export interface OrderState {
  orders: ReadonlyArray<Order>;

}

export const initialState: ReadonlyArray<Order[]> = [];

export const reducer = createReducer(
  initialState,
  on(
    Actions.loadOrdersSuccess,
    (state, { orders })=> {
      // console.log("reducer", orders);
      
      return orders
    }
  ),

);
