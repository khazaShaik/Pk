import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/angular';

import { BooksPartialState } from './books.reducer';
import {
  LoadBooks,
  BooksLoaded,
  BooksLoadError,
  BooksActionTypes
} from './books.actions';

@Injectable()
export class BooksEffects {
  @Effect() loadBooks$ = this.dataPersistence.fetch(
    BooksActionTypes.LoadBooks,
    {
      run: (action: LoadBooks, state: BooksPartialState) => {
        // Your custom REST 'load' logic goes here. For now just return an empty list...
        return new BooksLoaded([]);
      },

      onError: (action: LoadBooks, error) => {
        console.error('Error', error);
        return new BooksLoadError(error);
      }
    }
  );

  constructor(
    private actions$: Actions,
    private dataPersistence: DataPersistence<BooksPartialState>
  ) {}
}
