import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiModule } from '../../../../../libs/ui/src/lib/ui.module';

import { CartRoutingModule } from './cart-routing.module';
import { CartComponent } from './component/cart.component';

@NgModule({
  declarations: [CartComponent],
  imports: [CommonModule, CartRoutingModule, UiModule],
  exports: [CartComponent]
})
export class CartModule {}
