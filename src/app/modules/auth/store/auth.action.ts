import { createAction, props } from "@ngrx/store";
import { User } from "../auth.model";

export const login = createAction(
    '[Auth page] loginStart',
    props<{email: string, password : string }>()
)

export const loginSuccess = createAction(
    '[Auth page] loginSuccess',
    props<{user: User}>()
)