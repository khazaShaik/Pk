import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './component/home.component';
import { UiModule } from '../../../../../libs/ui/src/lib/ui.module'

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, HomeRoutingModule, UiModule, ],
  entryComponents: [HomeComponent]
})
export class HomeModule { }
