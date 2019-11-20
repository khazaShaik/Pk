import { Injectable } from '@angular/core';

import { select, Store } from '@ngrx/store';

import { UiPartialState } from './ui.reducer';
import { uiQuery } from './ui.selectors';
import { LoadUi } from './ui.actions';

@Injectable()
export class UiFacade {
  loaded$ = this.store.pipe(select(uiQuery.getLoaded));
  allUi$ = this.store.pipe(select(uiQuery.getAllUi));
  selectedUi$ = this.store.pipe(select(uiQuery.getSelectedUi));

  constructor(private store: Store<UiPartialState>) {}

  loadAll() {
    this.store.dispatch(new LoadUi());
  }
}
