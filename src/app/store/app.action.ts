import { createAction, props } from '@ngrx/store';
import { AppState } from './app.reducer';

export const BrowserReload = createAction(
  '[AppComponent] Reload',
  props<{appState : AppState}>()
);

