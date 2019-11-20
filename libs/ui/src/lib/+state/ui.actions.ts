import { Action } from '@ngrx/store';
import { Entity } from './ui.reducer';

export enum UiActionTypes {
  LoadUi = '[Ui] Load Ui',
  UiLoaded = '[Ui] Ui Loaded',
  UiLoadError = '[Ui] Ui Load Error',
  SideNavLoaded = '[SideNav] Loaded',
  SearchBarLoaded = '[SearchBar] Loaded',
  CardTitleLoaded = '[CardTitle] Loaded'
}

export class LoadUi implements Action {
  readonly type = UiActionTypes.LoadUi;
}

export class UiLoadError implements Action {
  readonly type = UiActionTypes.UiLoadError;
  constructor(public payload: any) {}
}

export class UiLoaded implements Action {
  readonly type = UiActionTypes.UiLoaded;
  constructor(public payload: Entity[]) {}
}

export class SideNavLoaded implements Action {
  readonly type = UiActionTypes.SideNavLoaded;
}

export class SearchBarLoaded implements Action {
  readonly type = UiActionTypes.SearchBarLoaded;
}

export class CardTitleLoaded implements Action {
  readonly type = UiActionTypes.CardTitleLoaded;
}
export type UiAction =
  | LoadUi
  | UiLoaded
  | UiLoadError
  | SideNavLoaded
  | SearchBarLoaded
  | CardTitleLoaded;

export const fromUiActions = {
  LoadUi,
  UiLoaded,
  UiLoadError,
  SideNavLoaded,
  SearchBarLoaded,
  CardTitleLoaded
};
