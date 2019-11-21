import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './component/home.component';
import { UiModule } from '../../../../../libs/ui/src/lib/ui.module';
import { ServicesModule } from '../../../../../libs/services/src/lib/services.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, HomeRoutingModule, UiModule, ServicesModule],
  entryComponents: [HomeComponent]
})
export class HomeModule {}
