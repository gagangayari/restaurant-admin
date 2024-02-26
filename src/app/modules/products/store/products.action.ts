import { createAction, props } from '@ngrx/store';
import { productItem } from '../products.model';

export const loadProducts = createAction(
  '[Products] LoadProducts'
);

export const loadProductSuccess = createAction(
  '[Products] LoadProductSuccess',
  props<{ products: ReadonlyArray<productItem[]>}>()
);

export const loadProductFailure = createAction(
  '[Products] LoadProductFailure',
  props<{ error: any }>()
);

export const dummyAction = createAction('[dummyAction] DummyAction')

