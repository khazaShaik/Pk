import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UI_FEATURE_KEY, UiState } from './ui.reducer';

// Lookup the 'Ui' feature state managed by NgRx
const getUiState = createFeatureSelector<UiState>(UI_FEATURE_KEY);

const getLoaded = createSelector(
  getUiState,
  (state: UiState) => state.loaded
);
const getError = createSelector(
  getUiState,
  (state: UiState) => state.error
);

const getAllUi = createSelector(
  getUiState,
  getLoaded,
  (state: UiState, isLoaded) => {
    return isLoaded ? state.list : [];
  }
);
const getSelectedId = createSelector(
  getUiState,
  (state: UiState) => state.selectedId
);
const getSelectedUi = createSelector(
  getAllUi,
  getSelectedId,
  (ui, id) => {
    const result = ui.find(it => it['id'] === id);
    return result ? Object.assign({}, result) : undefined;
  }
);

export const uiQuery = {
  getLoaded,
  getError,
  getAllUi,
  getSelectedUi
};
