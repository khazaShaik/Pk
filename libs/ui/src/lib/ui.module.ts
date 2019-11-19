import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  imports: [CommonModule, MatInputModule, MatButtonModule, MatIconModule, MatCardModule],
  declarations: [SearchBarComponent, SideNavComponent],
  exports: [SearchBarComponent, SideNavComponent]
})
export class UiModule { }
