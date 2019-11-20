import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { UiState } from '../+state/ui.reducer';
import { fromUiActions } from '../+state/ui.actions';

@Component({
  selector: 'ui-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {
  @Input('placeholder') placeholder;

  constructor(private store: Store<UiState>) {}

  ngOnInit() {
    this.store.dispatch(new fromUiActions.SearchBarLoaded());
  }
}
