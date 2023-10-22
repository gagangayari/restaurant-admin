import { createAction, props } from '@ngrx/store';
import { Product } from '../products.model';

export const loadProducts = createAction(
  '[Products] LoadProducts'
);

export const loadProductSuccess = createAction(
  '[Products] LoadProductSuccess',
  props<{ products: ReadonlyArray<Product[]>}>()
);

export const loadProductFailure = createAction(
  '[Products] LoadProductFailure',
  props<{ error: any }>()
);
