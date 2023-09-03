import { createAction, props } from '@ngrx/store';

export const orderOrders = createAction(
  '[Order] Order Orders'
);

export const orderOrdersSuccess = createAction(
  '[Order] Order Orders Success',
  props<{ data: any }>()
);

export const orderOrdersFailure = createAction(
  '[Order] Order Orders Failure',
  props<{ error: any }>()
);
