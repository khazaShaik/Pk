import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/angular';

import { UiPartialState } from './ui.reducer';
import { LoadUi, UiLoaded, UiLoadError, UiActionTypes } from './ui.actions';

@Injectable()
export class UiEffects {
  @Effect() loadUi$ = this.dataPersistence.fetch(UiActionTypes.LoadUi, {
    run: (action: LoadUi, state: UiPartialState) => {
      // Your custom REST 'load' logic goes here. For now just return an empty list...
      return new UiLoaded([]);
    },

    onError: (action: LoadUi, error) => {
      console.error('Error', error);
      return new UiLoadError(error);
    }
  });

  constructor(
    private actions$: Actions,
    private dataPersistence: DataPersistence<UiPartialState>
  ) {}
}
