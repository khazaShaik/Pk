import { UiAction, UiActionTypes } from './ui.actions';

export const UI_FEATURE_KEY = 'ui';

/**
 * Interface for the 'Ui' data used in
 *  - UiState, and the reducer function
 *
 *  Note: replace if already defined in another module
 */

/* tslint:disable:no-empty-interface */
export interface Entity {}

export interface UiState {
  list: Entity[]; // list of Ui; analogous to a sql normalized table
  selectedId?: string | number; // which Ui record has been selected
  loaded: boolean; // has the Ui list been loaded
  sideNavloaded: boolean;
  searchBarLoaded: boolean;
  error?: any; // last none error (if any)
}

export interface UiPartialState {
  readonly [UI_FEATURE_KEY]: UiState;
}

export const initialState: UiState = {
  list: [],
  loaded: false,
  sideNavloaded: false,
  searchBarLoaded: false
};

export function reducer(
  state: UiState = initialState,
  action: UiAction
): UiState {
  switch (action.type) {
    case UiActionTypes.UiLoaded: {
      state = {
        ...state,
        list: action.payload,
        loaded: true
      };
      break;
    }
    case UiActionTypes.SideNavLoaded: {
      state = {
        ...state,
        sideNavloaded: true
      };
      break;
    }
    case UiActionTypes.SearchBarLoaded: {
      state = {
        ...state,
        searchBarLoaded: true
      };
      break;
    }
  }
  return state;
}
