import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiModule } from '@workspace/libs/ui';

import { CollectionRoutingModule } from './collection-routing.module';
import { CollectionComponent } from './component/collection.component';

@NgModule({
  declarations: [CollectionComponent],
  imports: [CommonModule, CollectionRoutingModule, UiModule],
  exports: [CollectionComponent]
})
export class CollectionModule {}
