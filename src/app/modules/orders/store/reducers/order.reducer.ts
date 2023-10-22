import { Action, createReducer, on } from '@ngrx/store';
import * as Actions from '../actions/order.actions';
import { Order } from '../../order.model';


export interface OrderState {
  orders: ReadonlyArray<Order>;

}

export const initialState: ReadonlyArray<Order[]> = [];

export const orderReducer = createReducer(
  initialState,
  on(
    Actions.loadOrdersSuccess,
    (state, action)=> {
      console.log("State: " ,state);
      console.log("Order: " ,action.orders);
      
      
      return action.orders
    }
  ),

);
