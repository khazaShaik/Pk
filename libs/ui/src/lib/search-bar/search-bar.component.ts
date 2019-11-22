import { Component, OnInit, Input } from '@angular/core';
import { CommonService } from '@workspace/libs/services';

@Component({
  selector: 'ui-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {
  @Input('placeholder') placeholder;
  public searchInput: string = '';

  constructor(private commonService: CommonService) {}

  ngOnInit() {}

  public onKeyUp() {
    this.commonService.searchInput.next(this.searchInput);
  }
}
