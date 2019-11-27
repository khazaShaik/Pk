import { Injectable } from '@angular/core';
import { Effect, Actions, ofType, createEffect } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/angular';

import { BooksPartialState } from './books.reducer';
import {
  LoadBooks,
  BooksLoaded,
  BooksLoadError,
  BooksActionTypes
} from './books.actions';
import { HttpWrapperService, CommonService } from '@workspace/libs/services';
import { HttpHeaders } from '@angular/common/http';
import { HOME_CONSTANTS } from '../utils/constants';
import { map } from 'rxjs/internal/operators/map';
import { Observable } from 'rxjs';
import { tap, mergeMap } from 'rxjs/operators';

@Injectable()
export class BooksEffects {
  public defaultHeaders: HttpHeaders = new HttpHeaders();

  loadBooks$ = createEffect(() =>
    this.dataPersistence.fetch(BooksActionTypes.LoadBooks, {
      run: (action: LoadBooks, state: BooksPartialState) => {
        // Your custom REST 'load' logic goes here. For now just return an empty list...
        let URL = HOME_CONSTANTS.URL;
        // URL = URL + keyword;
        return this.httpWrapperService
          .get(URL, this.defaultHeaders, {}, {})
          .pipe(
            map(response => {
              // this.commonService.booksResponseData.next(response.body);
              this.booksData = response.body.items;
              return new BooksLoaded(this.booksData);
            })
          );
      },

      onError: (action: LoadBooks, error) => {
        console.error('Error', error);
        return new BooksLoadError(error);
      }
    })
  );
  public booksData: any;

  constructor(
    private actions$: Actions,
    private dataPersistence: DataPersistence<BooksPartialState>,
    private httpWrapperService: HttpWrapperService,
    private commonService: CommonService
  ) {
    this.defaultHeaders.append(
      'Content-Type',
      'application/json; charset=utf-8'
    );
  }
}
