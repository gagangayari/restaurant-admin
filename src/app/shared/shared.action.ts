import { createAction, props } from "@ngrx/store";

export const setLoadingSpinner = createAction(
    '[shared state] setLoadingSpinner',
    props<{ status : boolean}>(),
)