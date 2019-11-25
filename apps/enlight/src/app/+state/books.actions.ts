import { Action } from '@ngrx/store';
import { Entity } from './books.reducer';

export enum BooksActionTypes {
  LoadBooks = '[Books] Load Books',
  BooksLoaded = '[Books] Books Loaded',
  BooksLoadError = '[Books] Books Load Error'
}

export class LoadBooks implements Action {
  readonly type = BooksActionTypes.LoadBooks;
}

export class BooksLoadError implements Action {
  readonly type = BooksActionTypes.BooksLoadError;
  constructor(public payload: any) {}
}

export class BooksLoaded implements Action {
  readonly type = BooksActionTypes.BooksLoaded;
  constructor(public payload: Entity[]) {}
}

export type BooksAction = LoadBooks | BooksLoaded | BooksLoadError;

export const fromBooksActions = {
  LoadBooks,
  BooksLoaded,
  BooksLoadError
};
