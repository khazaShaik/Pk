import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'card-tile',
  templateUrl: './card-tile.component.html',
  styleUrls: ['./card-tile.component.css']
})
export class CardTileComponent implements OnInit {
  @Input() bookTitle;
  @Input() bookSubTitle;
  @Input() smallThumbnail;
  @Input() bookDescription;
  constructor() {}

  ngOnInit() {}
}
