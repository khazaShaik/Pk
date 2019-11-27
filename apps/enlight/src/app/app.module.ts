import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { UiModule } from '../../../../libs/ui/src/lib/ui.module';
import { ServicesModule } from '../../../../libs/services/src/lib/services.module';
import { HomeModule } from './home/home.module';
import { CartModule } from './cart/cart.module';
import { CollectionModule } from './collection/collection.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { HttpClientModule } from '@angular/common/http';
import { BooksFacade } from './+state/books.facade';
import { BooksEffects } from './+state/books.effects';
import * as fromBooksReducer from './+state/books.reducer';

@NgModule({
  declarations: [AppComponent],
  imports: [
    HttpClientModule,
    BrowserModule,
    ServicesModule,
    UiModule,
    HomeModule,
    CartModule,
    CollectionModule,
    RouterModule.forRoot(
      [{ path: '', redirectTo: 'home', pathMatch: 'full' }],
      { initialNavigation: 'enabled' }
    ),
    BrowserAnimationsModule,
    StoreModule.forRoot(
      { books: fromBooksReducer.reducer },
      {
        metaReducers: !environment.production ? [] : [],
        runtimeChecks: {
          strictActionImmutability: true,
          strictStateImmutability: true
        }
      }
    ),
    EffectsModule.forRoot([BooksEffects]),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    StoreRouterConnectingModule.forRoot()
  ],
  providers: [BooksFacade],
  bootstrap: [AppComponent]
})
export class AppModule {}
