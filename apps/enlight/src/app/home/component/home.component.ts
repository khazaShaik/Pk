import { Component, OnInit, Output } from '@angular/core';
import { CommonService } from 'libs/services/src/lib/shared/common.service';
import { HomeService } from '../service/home.service';
import { BooksFacade } from '../../+state/books.facade'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  public booksRecords: any = {}
  public searchInputData: any;

  constructor(private homeService: HomeService, private commonService: CommonService, private booksFacade: BooksFacade) { }

  ngOnInit() {
    this.searchInputData = this.commonService.searchInput.subscribe();
  }

  public fetchBooksRecords(searchedData) {
    // this.homeService.searchBooks(searchedData).subscribe((data: any) => {
    //   this.booksRecords = data;
    // });
    this.booksFacade.loadAll();
  }




}
