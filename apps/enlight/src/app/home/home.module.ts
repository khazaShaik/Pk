import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './component/home.component';
import { UiModule } from '../../../../../libs/ui/src/lib/ui.module';
import { ServicesModule } from '../../../../../libs/services/src/lib/services.module';
import { HomeService } from './service/home.service';
import { HttpWrapperService } from 'libs/services/src/lib/http/http-wrapper.service';
import { HttpClient, HttpHandler } from '@angular/common/http';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, HomeRoutingModule, UiModule, ServicesModule],
  providers: [HomeService],
  entryComponents: [HomeComponent]
})
export class HomeModule { }
