import { createAction, props } from '@ngrx/store';
import { Order } from '../../order.model';
import { AppState } from 'src/app/store/app.reducer';

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

export const onBrowserReload = createAction(
  '[BrowserReload] reloadOrders',
  props<{state : AppState}>
);

export const deleteOrder = createAction(
  '[Order] deleteOrders',
  props<{ orderId : String}>()

);

export const deleteOrderSuccess = createAction('[Order] deleteOrdersSuccess');
export const deleteOrderFailure = createAction('[Order] deleteOrdersFailure');

export const dummyAction = createAction('[dummyAction] DummyAction')
