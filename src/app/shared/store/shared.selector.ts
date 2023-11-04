import { createFeature, createFeatureSelector, createSelector } from "@ngrx/store";
import { SharedState } from "./shared.reducer";
import { AppState } from "../../store/app.reducer";

export const featureKey = 'shared'
export const sharedSelectorState = createFeatureSelector<SharedState>(featureKey);




export const getLoadingState = createSelector(sharedSelectorState,
     (state: SharedState) =>  state.showLoading);
