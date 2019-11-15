import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeModule } from './home/home.module';
import { CartModule } from './cart/cart.module';
import { CollectionModule } from './collection/collection.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HomeModule,
    CartModule,
    CollectionModule,
    RouterModule.forRoot([{ path: '', redirectTo: 'home', pathMatch: 'full' }], { initialNavigation: 'enabled' })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
