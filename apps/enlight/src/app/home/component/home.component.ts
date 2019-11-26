import { Component, OnInit, Output } from '@angular/core';
import { CommonService } from 'libs/services/src/lib/shared/common.service';
import { HomeService } from '../service/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  public booksRecords = {
    "kind": "books#volumes",
    "totalItems": 1091,
    "items": [
      {
        "kind": "books#volume",
        "id": "tI5UswEACAAJ",
        "etag": "NGyGWUCxh2I",
        "selfLink": "https://www.googleapis.com/books/v1/volumes/tI5UswEACAAJ",
        "volumeInfo": {
          "title": "Ng-Book",
          "subtitle": "The Complete Guide to Angular",
          "authors": [
            "Nathan Murray",
            "Felipe Coury",
            "Ari Lerner",
            "Carlos Taborda"
          ],
          "publisher": "Createspace Independent Publishing Platform",
          "publishedDate": "2018-02-06",
          "description": "ng-book. The in-depth, complete, and up-to-date book on Angular. Become an Angular expert today. Updated for Angular, Angular CLI, and Community Style Guide Ready to master Angular? What if you could master the entire framework - with solid foundations - in less time without beating your head against a wall? Imagine how quickly you could work if you knew the best practices and the best tools? Stop wasting your time searching and have everything you need to be productive in one, well-organized place, with complete examples to get your project up without needing to resort to endless hours of research. You will learn what you need to know to work professionally with ng-book: The Complete Book on Angular. Get up and running quickly The first chapter opens with building your first Angular app. Within the first few minutes, you'll know enough to have an app running Lots of Sample Apps and Code When you buy ng-book, you're not buying just a book, but dozens of code examples. Every chapter in the book comes with a complete project that uses the concepts in the chapter. The code is available for download, free from our website. Table of Contents Writing your first Angular web application How Angular Works Built-in Directives Forms in Angular 2 HTTP and APIs Routing Dependency Injection Data Architecture in Angular 2 Data Architecture with Observables and RxJS Data Architecture with Redux Redux and TypeScript Data Architecture with Redux Advanced Components Testing Converting an Angular 1 app to Angular Comprehensive You'll learn core Angular concepts - from how Angular works under the hood, to rich interactive components, from in-depth testing to real-world applications Best Practices Learn Angular best practices, such as: testing, code organization, and how to structure your app for performance. We'll walk through practical, common examples of how to implement complete components of your applications Example Apps included in the book The book comes with sample apps that show you how to create: A component-based Reddit clone A real-time chat app using RxJS Observables A YouTube search-as-you-type app A Spotify search for tracks with playable song preview Plus lots more mini-examples that show you how to write Components, how to use Forms, and how to use APIs The code examples currently have over 5,500+ lines of runnable code (TypeScript, non-comment lines) What our Customers Say \"Fantastic work guys! I have no idea where I'd be with Angular without ng-book. You guys have made this SOOOO much easier to learn and keep up with. Thanks again..you guys are awesome!\" -- Jacob Cheriathundam \"Just finished ng-book2. I think it is the best learning material one can find about Angular today.\" -- Jegor Uglov FAQ What version does the book cover? This revision of the book covers up to angular-4.1.0. An updated version of the code is available for free at our website. Do I have to know Angular 1? Nope! We don't assume that you've used Angular 1. This book teaches Angular from the ground up. Of course, if you've used Angular 1, we'll point out common ideas (because there are many), but ng-book stands on its own Is ng-book an upgrade to ng-book 1? No. This is a completely new book and shares no content or code with ng-book 1. Angular 1 and Angular 2+ are two different frameworks and ng-book 1 and ng-book are two different books.",
          "industryIdentifiers": [
            {
              "type": "ISBN_10",
              "identifier": "1985170280"
            },
            {
              "type": "ISBN_13",
              "identifier": "9781985170285"
            }
          ],
          "readingModes": {
            "text": false,
            "image": false
          },
          "pageCount": 626,
          "printType": "BOOK",
          "maturityRating": "NOT_MATURE",
          "allowAnonLogging": false,
          "contentVersion": "preview-1.0.0",
          "panelizationSummary": {
            "containsEpubBubbles": false,
            "containsImageBubbles": false
          },
          "imageLinks": {
            "smallThumbnail": "http://books.google.com/books/content?id=tI5UswEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
            "thumbnail": "http://books.google.com/books/content?id=tI5UswEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
          },
          "language": "en",
          "previewLink": "http://books.google.co.in/books?id=tI5UswEACAAJ&dq=angular&hl=&cd=1&source=gbs_api",
          "infoLink": "http://books.google.co.in/books?id=tI5UswEACAAJ&dq=angular&hl=&source=gbs_api",
          "canonicalVolumeLink": "https://books.google.com/books/about/Ng_Book.html?hl=&id=tI5UswEACAAJ"
        },
        "saleInfo": {
          "country": "IN",
          "saleability": "NOT_FOR_SALE",
          "isEbook": false
        },
        "accessInfo": {
          "country": "IN",
          "viewability": "NO_PAGES",
          "embeddable": false,
          "publicDomain": false,
          "textToSpeechPermission": "ALLOWED",
          "epub": {
            "isAvailable": false
          },
          "pdf": {
            "isAvailable": false
          },
          "webReaderLink": "http://play.google.com/books/reader?id=tI5UswEACAAJ&hl=&printsec=frontcover&source=gbs_api",
          "accessViewStatus": "NONE",
          "quoteSharingAllowed": false
        },
        "searchInfo": {
          "textSnippet": "No. This is a completely new book and shares no content or code with ng-book 1. Angular 1 and Angular 2+ are two different frameworks and ng-book 1 and ng-book are two different books."
        }
      }
    ]
  }
  public searchInputData: any;

  constructor(private homeService: HomeService, private commonService: CommonService) { }

  ngOnInit() {
    this.searchInputData = this.commonService.searchInput.subscribe();
  }

  public fetchBooksRecords(searchedData) {
    this.homeService.searchBooks(searchedData).subscribe((data: any) => {
      this.booksRecords = data;
    });
  }




}
