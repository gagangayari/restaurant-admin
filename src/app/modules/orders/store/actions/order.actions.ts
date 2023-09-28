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

export const dummyAction = createAction('DummyAction')
