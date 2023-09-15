import { createAction, props } from '@ngrx/store';
import { Order } from '../../order.model';

export const loadOrders = createAction(
  '[Order] LoadOrders'
);

export const loadOrdersSuccess = createAction(
  '[Order] getOrdersSuccess',
  props<{ orders: ReadonlyArray<Order[]>}>()
);

export const loadOrdersFailure = createAction(
  '[Order] getOrdersFailure',
  props<{ error: any }>()
);
