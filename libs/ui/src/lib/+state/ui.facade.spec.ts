import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { readFirst } from '@nrwl/angular/testing';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule, Store } from '@ngrx/store';

import { NxModule } from '@nrwl/angular';

import { UiEffects } from './ui.effects';
import { UiFacade } from './ui.facade';

import { uiQuery } from './ui.selectors';
import { LoadUi, UiLoaded } from './ui.actions';
import { UiState, Entity, initialState, reducer } from './ui.reducer';

interface TestSchema {
  ui: UiState;
}

describe('UiFacade', () => {
  let facade: UiFacade;
  let store: Store<TestSchema>;
  let createUi;

  beforeEach(() => {
    createUi = (id: string, name = ''): Entity => ({
      id,
      name: name || `name-${id}`
    });
  });

  describe('used in NgModule', () => {
    beforeEach(() => {
      @NgModule({
        imports: [
          StoreModule.forFeature('ui', reducer, { initialState }),
          EffectsModule.forFeature([UiEffects])
        ],
        providers: [UiFacade]
      })
      class CustomFeatureModule {}

      @NgModule({
        imports: [
          NxModule.forRoot(),
          StoreModule.forRoot({}),
          EffectsModule.forRoot([]),
          CustomFeatureModule
        ]
      })
      class RootModule {}
      TestBed.configureTestingModule({ imports: [RootModule] });

      store = TestBed.get(Store);
      facade = TestBed.get(UiFacade);
    });

    /**
     * The initially generated facade::loadAll() returns empty array
     */
    it('loadAll() should return empty list with loaded == true', async done => {
      try {
        let list = await readFirst(facade.allUi$);
        let isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(0);
        expect(isLoaded).toBe(false);

        facade.loadAll();

        list = await readFirst(facade.allUi$);
        isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(0);
        expect(isLoaded).toBe(true);

        done();
      } catch (err) {
        done.fail(err);
      }
    });

    /**
     * Use `UiLoaded` to manually submit list for state management
     */
    it('allUi$ should return the loaded list; and loaded flag == true', async done => {
      try {
        let list = await readFirst(facade.allUi$);
        let isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(0);
        expect(isLoaded).toBe(false);

        store.dispatch(new UiLoaded([createUi('AAA'), createUi('BBB')]));

        list = await readFirst(facade.allUi$);
        isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(2);
        expect(isLoaded).toBe(true);

        done();
      } catch (err) {
        done.fail(err);
      }
    });
  });
});
