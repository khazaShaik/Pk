import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpWrapperService } from '../../../services/src/lib/http/http-wrapper.service';
import { LoggerService } from '../../../services/src/lib/logger/logger.service';

@NgModule({
  imports: [CommonModule],
  providers: [HttpWrapperService, LoggerService]
})
export class ServicesModule {}
