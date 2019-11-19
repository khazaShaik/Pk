import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { UiModule } from '../../../../libs/ui/src/lib/ui.module';
import { HomeModule } from './home/home.module';
import { CartModule } from './cart/cart.module';
import { CollectionModule } from './collection/collection.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    UiModule,
    HomeModule,
    CartModule,
    CollectionModule,
    RouterModule.forRoot([{ path: '', redirectTo: 'home', pathMatch: 'full' }], { initialNavigation: 'enabled' }),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
