import { Component, OnInit } from '@angular/core';
import { CommonService } from 'libs/services/src/lib/shared/common.service';
import { HomeService } from '../service/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public jsonData = {
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
     },
     {
      "kind": "books#volume",
      "id": "eNExy_X1YYcC",
      "etag": "efwaX6sSyRQ",
      "selfLink": "https://www.googleapis.com/books/v1/volumes/eNExy_X1YYcC",
      "volumeInfo": {
       "title": "AngularJS",
       "authors": [
        "Brad Green",
        "Shyam Seshadri"
       ],
       "publisher": "\"O'Reilly Media, Inc.\"",
       "publishedDate": "2013-04-08",
       "description": "Develop smaller, lighter web apps that are simple to create and easy to test, extend, and maintain as they grow. This hands-on guide introduces you to AngularJS, the open source JavaScript framework that uses Model–view–controller (MVC) architecture, data binding, client-side templates, and dependency injection to create a much-needed structure for building web apps. Guided by two engineers who worked on AngularJS at Google, you’ll walk through the framework’s key features, and then build a working AngularJS app—from layout to testing, compiling, and debugging. If you have JavaScript experience, you’ll learn how AngularJS helps reduce the complexity of your web app. Dive deep into Angular’s building blocks and learn how they work together Gain maximum flexibility by separating logic, data, and presentation responsibilities with MVC Assemble your full app in the browser, using client-side templates Use AngularJS directives to extend HTML with declarative syntax Communicate with the server and implement simple caching with the $http service Use dependency injection to improve refactoring, testability, and multiple environment design Get code samples for common problems you face in most web apps",
       "industryIdentifiers": [
        {
         "type": "ISBN_13",
         "identifier": "9781449355883"
        },
        {
         "type": "ISBN_10",
         "identifier": "1449355889"
        }
       ],
       "readingModes": {
        "text": false,
        "image": true
       },
       "pageCount": 196,
       "printType": "BOOK",
       "categories": [
        "Computers"
       ],
       "averageRating": 2.5,
       "ratingsCount": 4,
       "maturityRating": "NOT_MATURE",
       "allowAnonLogging": false,
       "contentVersion": "0.2.0.0.preview.1",
       "imageLinks": {
        "smallThumbnail": "http://books.google.com/books/content?id=eNExy_X1YYcC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
        "thumbnail": "http://books.google.com/books/content?id=eNExy_X1YYcC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
       },
       "language": "en",
       "previewLink": "http://books.google.co.in/books?id=eNExy_X1YYcC&printsec=frontcover&dq=angular&hl=&cd=2&source=gbs_api",
       "infoLink": "http://books.google.co.in/books?id=eNExy_X1YYcC&dq=angular&hl=&source=gbs_api",
       "canonicalVolumeLink": "https://books.google.com/books/about/AngularJS.html?hl=&id=eNExy_X1YYcC"
      },
      "saleInfo": {
       "country": "IN",
       "saleability": "NOT_FOR_SALE",
       "isEbook": false
      },
      "accessInfo": {
       "country": "IN",
       "viewability": "PARTIAL",
       "embeddable": true,
       "publicDomain": false,
       "textToSpeechPermission": "ALLOWED",
       "epub": {
        "isAvailable": false
       },
       "pdf": {
        "isAvailable": false
       },
       "webReaderLink": "http://play.google.com/books/reader?id=eNExy_X1YYcC&hl=&printsec=frontcover&source=gbs_api",
       "accessViewStatus": "SAMPLE",
       "quoteSharingAllowed": false
      },
      "searchInfo": {
       "textSnippet": "This hands-on guide introduces you to AngularJS, the open source JavaScript framework that uses Model–view–controller (MVC) architecture, data binding, client-side templates, and dependency injection to create a much-needed structure ..."
      }
     },
     {
      "kind": "books#volume",
      "id": "V0swDwAAQBAJ",
      "etag": "OBHkSjF14zo",
      "selfLink": "https://www.googleapis.com/books/v1/volumes/V0swDwAAQBAJ",
      "volumeInfo": {
       "title": "Angular 2 Interview Questions and Answers",
       "subtitle": "With Typescript and Angular 4",
       "authors": [
        "Anil Singh"
       ],
       "publisher": "Educreation Publishing",
       "publishedDate": "2017-08-16",
       "description": "This book has the collection of Angular 2 Interview Questions and Answers with TypeScript and basic of Angular 4. Angular 2 is a most popular framework for developing mobile as well as web applications. Angular 2 is so simpler, faster, modular and instrumented design and it is developed by Google and Misko Hevery is the father of Angular. You can learn complete knowledge of Angular 2, TypeScript and Angular 4 simpler and faster with examples. This book has important questions and answers for beginner and expert level of developers and it's containing 115 questions and answers with TypeScript, Angular 4 and examples.",
       "readingModes": {
        "text": false,
        "image": true
       },
       "pageCount": 160,
       "printType": "BOOK",
       "categories": [
        "Education"
       ],
       "averageRating": 5.0,
       "ratingsCount": 4,
       "maturityRating": "NOT_MATURE",
       "allowAnonLogging": true,
       "contentVersion": "preview-1.0.0",
       "panelizationSummary": {
        "containsEpubBubbles": false,
        "containsImageBubbles": false
       },
       "imageLinks": {
        "smallThumbnail": "http://books.google.com/books/content?id=V0swDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
        "thumbnail": "http://books.google.com/books/content?id=V0swDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
       },
       "language": "en",
       "previewLink": "http://books.google.co.in/books?id=V0swDwAAQBAJ&printsec=frontcover&dq=angular&hl=&cd=3&source=gbs_api",
       "infoLink": "https://play.google.com/store/books/details?id=V0swDwAAQBAJ&source=gbs_api",
       "canonicalVolumeLink": "https://play.google.com/store/books/details?id=V0swDwAAQBAJ"
      },
      "saleInfo": {
       "country": "IN",
       "saleability": "FOR_SALE",
       "isEbook": true,
       "listPrice": {
        "amount": 265.5,
        "currencyCode": "INR"
       },
       "retailPrice": {
        "amount": 185.85,
        "currencyCode": "INR"
       },
       "buyLink": "https://play.google.com/store/books/details?id=V0swDwAAQBAJ&rdid=book-V0swDwAAQBAJ&rdot=1&source=gbs_api",
       "offers": [
        {
         "finskyOfferType": 1,
         "listPrice": {
          "amountInMicros": 2.655E8,
          "currencyCode": "INR"
         },
         "retailPrice": {
          "amountInMicros": 1.8585E8,
          "currencyCode": "INR"
         }
        }
       ]
      },
      "accessInfo": {
       "country": "IN",
       "viewability": "PARTIAL",
       "embeddable": true,
       "publicDomain": false,
       "textToSpeechPermission": "ALLOWED",
       "epub": {
        "isAvailable": false
       },
       "pdf": {
        "isAvailable": true,
        "acsTokenLink": "http://books.google.co.in/books/download/Angular_2_Interview_Questions_and_Answer-sample-pdf.acsm?id=V0swDwAAQBAJ&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
       },
       "webReaderLink": "http://play.google.com/books/reader?id=V0swDwAAQBAJ&hl=&printsec=frontcover&source=gbs_api",
       "accessViewStatus": "SAMPLE",
       "quoteSharingAllowed": false
      },
      "searchInfo": {
       "textSnippet": "This book has the collection of Angular 2 Interview Questions and Answers with TypeScript and basic of Angular 4."
      }
     },
     {
      "kind": "books#volume",
      "id": "0BSOg0oHhZ0C",
      "etag": "uKLjjVsM6Pw",
      "selfLink": "https://www.googleapis.com/books/v1/volumes/0BSOg0oHhZ0C",
      "volumeInfo": {
       "title": "Angular Momentum in Quantum Mechanics",
       "authors": [
        "A. R. Edmonds"
       ],
       "publisher": "Princeton University Press",
       "publishedDate": "1996",
       "description": "This book offers a concise introduction to the angular momentum, one of the most fundamental quantities in all of quantum mechanics. Beginning with the quantization of angular momentum, spin angular momentum, and the orbital angular momentum, the author goes on to discuss the Clebsch-Gordan coefficients for a two-component system. After developing the necessary mathematics, specifically spherical tensors and tensor operators, the author then investigates the 3-j, 6-j, and 9-j symbols. Throughout, the author provides practical applications to atomic, molecular, and nuclear physics. These include partial-wave expansions, the emission and absorption of particles, the proton and electron quadrupole moment, matrix element calculation in practice, and the properties of the symmetrical top molecule.",
       "industryIdentifiers": [
        {
         "type": "ISBN_10",
         "identifier": "0691025894"
        },
        {
         "type": "ISBN_13",
         "identifier": "9780691025896"
        }
       ],
       "readingModes": {
        "text": false,
        "image": true
       },
       "pageCount": 146,
       "printType": "BOOK",
       "categories": [
        "Science"
       ],
       "averageRating": 4.0,
       "ratingsCount": 1,
       "maturityRating": "NOT_MATURE",
       "allowAnonLogging": false,
       "contentVersion": "1.1.1.0.preview.1",
       "panelizationSummary": {
        "containsEpubBubbles": false,
        "containsImageBubbles": false
       },
       "imageLinks": {
        "smallThumbnail": "http://books.google.com/books/content?id=0BSOg0oHhZ0C&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
        "thumbnail": "http://books.google.com/books/content?id=0BSOg0oHhZ0C&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
       },
       "language": "en",
       "previewLink": "http://books.google.co.in/books?id=0BSOg0oHhZ0C&pg=PA12&dq=angular&hl=&cd=4&source=gbs_api",
       "infoLink": "http://books.google.co.in/books?id=0BSOg0oHhZ0C&dq=angular&hl=&source=gbs_api",
       "canonicalVolumeLink": "https://books.google.com/books/about/Angular_Momentum_in_Quantum_Mechanics.html?hl=&id=0BSOg0oHhZ0C"
      },
      "saleInfo": {
       "country": "IN",
       "saleability": "NOT_FOR_SALE",
       "isEbook": false
      },
      "accessInfo": {
       "country": "IN",
       "viewability": "PARTIAL",
       "embeddable": true,
       "publicDomain": false,
       "textToSpeechPermission": "ALLOWED",
       "epub": {
        "isAvailable": false
       },
       "pdf": {
        "isAvailable": true,
        "acsTokenLink": "http://books.google.co.in/books/download/Angular_Momentum_in_Quantum_Mechanics-sample-pdf.acsm?id=0BSOg0oHhZ0C&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
       },
       "webReaderLink": "http://play.google.com/books/reader?id=0BSOg0oHhZ0C&hl=&printsec=frontcover&source=gbs_api",
       "accessViewStatus": "SAMPLE",
       "quoteSharingAllowed": false
      },
      "searchInfo": {
       "textSnippet": "L. * - 1 * -1 where r, p, and L, are the position vector with respect to 0, the linear \u003cbr\u003e\nmomentum, and \u003cb\u003eangular\u003c/b\u003e momentum respectively of the ith particle. Since the \u003cbr\u003e\nquantum mechanical operators relating to different particles commute, we may \u003cbr\u003e\ntake&nbsp;..."
      }
     },
     {
      "kind": "books#volume",
      "id": "xeZDDwAAQBAJ",
      "etag": "upsH/lIMNMM",
      "selfLink": "https://www.googleapis.com/books/v1/volumes/xeZDDwAAQBAJ",
      "volumeInfo": {
       "title": "Expert Angular",
       "authors": [
        "Mathieu Nayrolles",
        "Rajesh Gunasundaram",
        "Sridhar Rao"
       ],
       "publisher": "Packt Publishing Ltd",
       "publishedDate": "2017-07-31",
       "description": "Learn everything you need to build highly scalable, robust web applications using Angular release 4 About This Book Apply best practices and design patterns to achieve higher scalability in your Angular applications Understand the latest features of Angular and create your own components Get acquainted with powerful, advanced techniques in Angular to build professional web applications Who This Book Is For This book is for JavaScript developers with some prior exposure to Angular, at least through basic examples. We assume that you've got working knowledge of HTML, CSS, and JavaScript. What You Will Learn Implement asynchronous programming using Angular Beautify your application with the UI components built to the material design specification Secure your web application from unauthorized users Create complex forms, taking full advantage of 2-way data binding Test your Angular applications using the Jasmine and Protractor frameworks for better efficiency Learn how to integrate Angular with Bootstrap to create compelling web applications Use Angular built-in classes to apply animation in your app In Detail Got some experience of Angular under your belt? Want to learn everything about using advanced features for developing websites? This book is everything you need for the deep understanding of Angular that will set you apart from the developer crowd. Angular has introduced a new way to build applications. Creating complex and rich web applications, with a lighter resource footprint, has never been easier or faster. Angular is now at release 4, with significant changes through previous versions. This book has been written and tested for Angular release 4. Angular is a mature technology, and you'll likely have applications built with earlier versions. This book starts by showing you best practices and approaches to migrating your existing Angular applications so that you can be immediately up-to-date. You will take an in-depth look at components and see how to control the user journey in your applications by implementing routing and navigation. You will learn how to work with asynchronous programming by using Observables. To easily build applications that look great, you will learn all about template syntax and how to beautify applications with Material Design. Mastering forms and data binding will further speed up your application development time. Learning about managing services and animations will help you to progressively enhance your applications. Next you'll use native directives to integrate Bootstrap with Angular. You will see the best ways to test your application with the leading options such as Jasmine and Protractor. At the end of the book, you'll learn how to apply design patterns in Angular, and see the benefits they will bring to your development. Style and approach This book provides comprehensive coverage of all aspects of development with Angular. You will learn about all the most powerful Angular concepts, with examples and best practices. This book is everything you need for the deep understanding of Angular that will set you apart from the developer crowd.",
       "industryIdentifiers": [
        {
         "type": "ISBN_13",
         "identifier": "9781785887765"
        },
        {
         "type": "ISBN_10",
         "identifier": "1785887769"
        }
       ],
       "readingModes": {
        "text": true,
        "image": true
       },
       "pageCount": 454,
       "printType": "BOOK",
       "categories": [
        "Computers"
       ],
       "maturityRating": "NOT_MATURE",
       "allowAnonLogging": false,
       "contentVersion": "2.2.3.0.preview.3",
       "panelizationSummary": {
        "containsEpubBubbles": false,
        "containsImageBubbles": false
       },
       "imageLinks": {
        "smallThumbnail": "http://books.google.com/books/content?id=xeZDDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
        "thumbnail": "http://books.google.com/books/content?id=xeZDDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
       },
       "language": "en",
       "previewLink": "http://books.google.co.in/books?id=xeZDDwAAQBAJ&printsec=frontcover&dq=angular&hl=&cd=5&source=gbs_api",
       "infoLink": "https://play.google.com/store/books/details?id=xeZDDwAAQBAJ&source=gbs_api",
       "canonicalVolumeLink": "https://play.google.com/store/books/details?id=xeZDDwAAQBAJ"
      },
      "saleInfo": {
       "country": "IN",
       "saleability": "FOR_SALE",
       "isEbook": true,
       "listPrice": {
        "amount": 3217.85,
        "currencyCode": "INR"
       },
       "retailPrice": {
        "amount": 3217.85,
        "currencyCode": "INR"
       },
       "buyLink": "https://play.google.com/store/books/details?id=xeZDDwAAQBAJ&rdid=book-xeZDDwAAQBAJ&rdot=1&source=gbs_api",
       "offers": [
        {
         "finskyOfferType": 1,
         "listPrice": {
          "amountInMicros": 3.21785E9,
          "currencyCode": "INR"
         },
         "retailPrice": {
          "amountInMicros": 3.21785E9,
          "currencyCode": "INR"
         }
        }
       ]
      },
      "accessInfo": {
       "country": "IN",
       "viewability": "PARTIAL",
       "embeddable": true,
       "publicDomain": false,
       "textToSpeechPermission": "ALLOWED",
       "epub": {
        "isAvailable": true
       },
       "pdf": {
        "isAvailable": true
       },
       "webReaderLink": "http://play.google.com/books/reader?id=xeZDDwAAQBAJ&hl=&printsec=frontcover&source=gbs_api",
       "accessViewStatus": "SAMPLE",
       "quoteSharingAllowed": false
      },
      "searchInfo": {
       "textSnippet": "At the end of the book, you&#39;ll learn how to apply design patterns in Angular, and see the benefits they will bring to your development. Style and approach This book provides comprehensive coverage of all aspects of development with Angular."
      }
     },
     {
      "kind": "books#volume",
      "id": "d1ncwgEACAAJ",
      "etag": "mxHsKVeJyRk",
      "selfLink": "https://www.googleapis.com/books/v1/volumes/d1ncwgEACAAJ",
      "volumeInfo": {
       "title": "ANGULARJS: in 8 Hours, for Beginners, Learn Coding Fast! (2nd Edition)",
       "authors": [
        "Ray Yao"
       ],
       "publishedDate": "2019-01-17",
       "description": "About This BookThis Book Absolutely for Beginners:\"AngularJS in 8 Hours\" covers all essential AngularJS knowledge. You can learn complete primary skills of AngularJS fast and easily. The book includes more than 80 practical examples for beginners and includes tests & answers for the college exam, the engineer certification exam, and the job interview exam. Source Code for Download:This book provides source code for download; you can download the source code for better study, or copy the source code to your favorite editor to test the programs. Download link: forms.aweber.com/form/31/1924478131.htmIn this book, you can learn:How to use AngularJSHow to use DirectivesHow to use FiltersHow to use Directive in DOMHow to use EventsHow to use ExpressionHow to use Controller & ScopeHow to use Module & APIHow to use Angular ServiceHow to use Angular HttpHow to use Angular MySqlHow to use Angular CheckHow to use Angular ValidationHow to use Angular Include............And much more......Appendix 1 Ajax BasicAppendix 2 Know More AngularJSAppendix 3 AngularJS Tests & AnswersClick the Buy button now, start coding today! Tags:angularjs tutorial angular angularjs 2 ui examplesangularjs release date book apply editor ui courselearn angularjs angular testing video tutorial appangularjs angular basics javascript framework docsangularjs mvc version documentation websites siteslatest get angularjs application development codesusing angularjs angular angle agile js web app mvc",
       "industryIdentifiers": [
        {
         "type": "ISBN_10",
         "identifier": "179428379X"
        },
        {
         "type": "ISBN_13",
         "identifier": "9781794283794"
        }
       ],
       "readingModes": {
        "text": false,
        "image": false
       },
       "pageCount": 230,
       "printType": "BOOK",
       "maturityRating": "NOT_MATURE",
       "allowAnonLogging": false,
       "contentVersion": "preview-1.0.0",
       "panelizationSummary": {
        "containsEpubBubbles": false,
        "containsImageBubbles": false
       },
       "language": "en",
       "previewLink": "http://books.google.co.in/books?id=d1ncwgEACAAJ&dq=angular&hl=&cd=6&source=gbs_api",
       "infoLink": "http://books.google.co.in/books?id=d1ncwgEACAAJ&dq=angular&hl=&source=gbs_api",
       "canonicalVolumeLink": "https://books.google.com/books/about/ANGULARJS_in_8_Hours_for_Beginners_Learn.html?hl=&id=d1ncwgEACAAJ"
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
       "webReaderLink": "http://play.google.com/books/reader?id=d1ncwgEACAAJ&hl=&printsec=frontcover&source=gbs_api",
       "accessViewStatus": "NONE",
       "quoteSharingAllowed": false
      },
      "searchInfo": {
       "textSnippet": "About This BookThis Book Absolutely for Beginners:&quot;AngularJS in 8 Hours&quot; covers all essential AngularJS knowledge."
      }
     },
     {
      "kind": "books#volume",
      "id": "ZNHvswEACAAJ",
      "etag": "iz8lZXsrZxo",
      "selfLink": "https://www.googleapis.com/books/v1/volumes/ZNHvswEACAAJ",
      "volumeInfo": {
       "title": "Angular: Up and Running",
       "authors": [
        "Shyam Seshadri"
       ],
       "publisher": "O'Reilly Media",
       "publishedDate": "2018-06-15",
       "description": "If you're familiar with JavaScript, this hands-on guide will quickly get you up to speed on the Angular framework for building high-performance web-based desktop, mobile, and single-page applications. Initially dubbed Angular 2, this version is a complete rewrite from the same team that built the initial version of AngularJS. Developers familiar with that earlier version will also find this book to be a valuable resource. Author Shyam Seshadri takes you step-by-step through Angular's core building blocks in detail. You'll start by creating a simple Angular application before diving into Angular components, services, server calls, routing, and production requirements. By the end of the book, you'll be ready to use Angular for your own applications. Set up your development environment to build Angular applications rapidly Use Angular directives to construct common functionality for your application Create and test Angular components for building effective user interfaces Manage user input by building template-driven and reactive forms Understand when to use built-in Angular services and when and how to create your own Make HTTP calls and handle use cases that surface when working with servers Use Angular's routing module to encapsulate various pages and pieces using a different route Build an Angular application for production and learn how to deploy a performant Angular application",
       "industryIdentifiers": [
        {
         "type": "ISBN_10",
         "identifier": "1491999837"
        },
        {
         "type": "ISBN_13",
         "identifier": "9781491999837"
        }
       ],
       "readingModes": {
        "text": false,
        "image": false
       },
       "pageCount": 312,
       "printType": "BOOK",
       "categories": [
        "Computers"
       ],
       "maturityRating": "NOT_MATURE",
       "allowAnonLogging": false,
       "contentVersion": "preview-1.0.0",
       "panelizationSummary": {
        "containsEpubBubbles": false,
        "containsImageBubbles": false
       },
       "imageLinks": {
        "smallThumbnail": "http://books.google.com/books/content?id=ZNHvswEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
        "thumbnail": "http://books.google.com/books/content?id=ZNHvswEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
       },
       "language": "en",
       "previewLink": "http://books.google.co.in/books?id=ZNHvswEACAAJ&dq=angular&hl=&cd=7&source=gbs_api",
       "infoLink": "http://books.google.co.in/books?id=ZNHvswEACAAJ&dq=angular&hl=&source=gbs_api",
       "canonicalVolumeLink": "https://books.google.com/books/about/Angular_Up_and_Running.html?hl=&id=ZNHvswEACAAJ"
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
       "webReaderLink": "http://play.google.com/books/reader?id=ZNHvswEACAAJ&hl=&printsec=frontcover&source=gbs_api",
       "accessViewStatus": "NONE",
       "quoteSharingAllowed": false
      },
      "searchInfo": {
       "textSnippet": "This book will demystify Angular as a framework, as well as provide clear instructions and examples on how to get started with writing scalable Angular applications."
      }
     },
     {
      "kind": "books#volume",
      "id": "kaisDwAAQBAJ",
      "etag": "ssU2+cFtOeg",
      "selfLink": "https://www.googleapis.com/books/v1/volumes/kaisDwAAQBAJ",
      "volumeInfo": {
       "title": "Web Development with Angular and Bootstrap",
       "subtitle": "Embrace responsive web design and build adaptive Angular web applications, 3rd Edition",
       "authors": [
        "Sridhar Rao Chivukula",
        "Aki Iskandar"
       ],
       "publisher": "Packt Publishing Ltd",
       "publishedDate": "2019-08-30",
       "description": "Combine the power of Angular, Bootstrap 4, FlexLayout, and Angular Material Design to build elegant user interfaces Key Features Learn to combine Angular 6 with Bootstrap 4 to design highly intuitive and responsive web interfaces Explore the design principles for professional web layout with Angular Material, Flexbox, and Bootstrap Avoid potential stumbling blocks in web development with the help of expert tips Book Description Angular and Bootstrap have undergone a major overhaul to embrace emerging web technologies that help developers build cutting-edge web applications. This book is for you if you're ready to enhance your web development skills beyond HTML and CSS. It begins with the basics of Angular and Bootstrap 4, along with an introduction to ES and TypeScript. You'll be able to refine your skills further with flex-layout's Responsive API to specify different layouts and sizing for various screen sizes. By using Angular Material, you'll discover how to make your web pages look professional. You'll study how to format output using Angular's pipes and use the built-in router to set up routes for all your components. With the help of Webpack, you'll be able to easily wrap up your project and use SASS to make things pretty. Furthermore, you can validate the forms you've built and debug your application. This book will also guide you in transitioning from Bootstrap to Angular smoothly, hooking up with a server, and using Firebase as the persistence layer. You'll not only develop the right skills, but also gain insights into the potential stumbling blocks and tips for how to avoid them. By the end of this book, you'll have a stunning e-commerce application running, along with the confidence to build your own applications. What you will learn Develop Angular single-page applications using an ecosystem of helper tools Get familiar with Bootstrap's new grid and helper classes Embrace TypeScript and ECMAScript to write more maintainable code Implement custom directives for Bootstrap 4 with the ng2-bootstrap library Understand the component-oriented structure of Angular and its router Use the built-in HTTP library to work with API endpoints Manage your app's data and state with observables and streams Combine Angular and Bootstrap 4 with Firebase to develop a solid example Who this book is for Whether you already know a little about Bootstrap or Angular or you’re a complete beginner, this book will enhance your capabilities in both frameworks. It will guide you in easily building a fully functional web app. Working knowledge of HTML, CSS, and JavaScript is required to get a better understanding of Bootstrap and Angular.",
       "industryIdentifiers": [
        {
         "type": "ISBN_13",
         "identifier": "9781788834360"
        },
        {
         "type": "ISBN_10",
         "identifier": "1788834364"
        }
       ],
       "readingModes": {
        "text": true,
        "image": true
       },
       "pageCount": 492,
       "printType": "BOOK",
       "categories": [
        "Computers"
       ],
       "maturityRating": "NOT_MATURE",
       "allowAnonLogging": false,
       "contentVersion": "1.1.1.0.preview.3",
       "panelizationSummary": {
        "containsEpubBubbles": false,
        "containsImageBubbles": false
       },
       "imageLinks": {
        "smallThumbnail": "http://books.google.com/books/content?id=kaisDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
        "thumbnail": "http://books.google.com/books/content?id=kaisDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
       },
       "language": "en",
       "previewLink": "http://books.google.co.in/books?id=kaisDwAAQBAJ&printsec=frontcover&dq=angular&hl=&cd=8&source=gbs_api",
       "infoLink": "https://play.google.com/store/books/details?id=kaisDwAAQBAJ&source=gbs_api",
       "canonicalVolumeLink": "https://play.google.com/store/books/details?id=kaisDwAAQBAJ"
      },
      "saleInfo": {
       "country": "IN",
       "saleability": "FOR_SALE",
       "isEbook": true,
       "listPrice": {
        "amount": 683.21,
        "currencyCode": "INR"
       },
       "retailPrice": {
        "amount": 341.6,
        "currencyCode": "INR"
       },
       "buyLink": "https://play.google.com/store/books/details?id=kaisDwAAQBAJ&rdid=book-kaisDwAAQBAJ&rdot=1&source=gbs_api",
       "offers": [
        {
         "finskyOfferType": 1,
         "listPrice": {
          "amountInMicros": 6.8321E8,
          "currencyCode": "INR"
         },
         "retailPrice": {
          "amountInMicros": 3.416E8,
          "currencyCode": "INR"
         }
        }
       ]
      },
      "accessInfo": {
       "country": "IN",
       "viewability": "PARTIAL",
       "embeddable": true,
       "publicDomain": false,
       "textToSpeechPermission": "ALLOWED",
       "epub": {
        "isAvailable": true
       },
       "pdf": {
        "isAvailable": true
       },
       "webReaderLink": "http://play.google.com/books/reader?id=kaisDwAAQBAJ&hl=&printsec=frontcover&source=gbs_api",
       "accessViewStatus": "SAMPLE",
       "quoteSharingAllowed": false
      },
      "searchInfo": {
       "textSnippet": "This book is for you if you&#39;re ready to enhance your web development skills beyond HTML and CSS. It begins with the basics of Angular and Bootstrap 4, along with an introduction to ES and TypeScript."
      }
     },
     {
      "kind": "books#volume",
      "id": "zYgSMSqQJGYC",
      "etag": "1ntWRtU+MHk",
      "selfLink": "https://www.googleapis.com/books/v1/volumes/zYgSMSqQJGYC",
      "volumeInfo": {
       "title": "Angular Momentum Calculus in Quantum Physics",
       "authors": [
        "Michael Danos",
        "Vincent Gillet"
       ],
       "publisher": "World Scientific",
       "publishedDate": "1990",
       "description": "This book is concerned with the practical aspects of solving angular momentum problems. The novel but fully tested-out method (the Invariant Graph Method) allows one to write down from a single graph the complete final result of the problem. The drawing of the graph involves very few simple, essentially self-evident rules. Still it is a powerful tool to easily solve the most involved physical problems.The method is introduced step-by-step in a sequence of examples, beginning with the simplest matrix elements, and ending with the most general case of a reaction including angular distributions and correlations. The many-body and particle anti-particle systems are fully developed. All aspects: wave functions, vectors, operators, Fock space state vectors and operators, etc., are treated on the same footing. All concepts of angular momentum theory acquire a transparent meaning. Hence the book is valuable not only as a handbook in problem solving, but extremely so as an adjunct in any course on advanced qunatum physics, atomic, molecular, nuclear and particle physics.",
       "industryIdentifiers": [
        {
         "type": "ISBN_10",
         "identifier": "9810204124"
        },
        {
         "type": "ISBN_13",
         "identifier": "9789810204129"
        }
       ],
       "readingModes": {
        "text": false,
        "image": true
       },
       "pageCount": 163,
       "printType": "BOOK",
       "categories": [
        "Science"
       ],
       "maturityRating": "NOT_MATURE",
       "allowAnonLogging": false,
       "contentVersion": "0.0.2.0.preview.1",
       "panelizationSummary": {
        "containsEpubBubbles": false,
        "containsImageBubbles": false
       },
       "imageLinks": {
        "smallThumbnail": "http://books.google.com/books/content?id=zYgSMSqQJGYC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
        "thumbnail": "http://books.google.com/books/content?id=zYgSMSqQJGYC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
       },
       "language": "en",
       "previewLink": "http://books.google.co.in/books?id=zYgSMSqQJGYC&pg=PA1&dq=angular&hl=&cd=9&source=gbs_api",
       "infoLink": "http://books.google.co.in/books?id=zYgSMSqQJGYC&dq=angular&hl=&source=gbs_api",
       "canonicalVolumeLink": "https://books.google.com/books/about/Angular_Momentum_Calculus_in_Quantum_Phy.html?hl=&id=zYgSMSqQJGYC"
      },
      "saleInfo": {
       "country": "IN",
       "saleability": "NOT_FOR_SALE",
       "isEbook": false
      },
      "accessInfo": {
       "country": "IN",
       "viewability": "PARTIAL",
       "embeddable": true,
       "publicDomain": false,
       "textToSpeechPermission": "ALLOWED",
       "epub": {
        "isAvailable": false
       },
       "pdf": {
        "isAvailable": false
       },
       "webReaderLink": "http://play.google.com/books/reader?id=zYgSMSqQJGYC&hl=&printsec=frontcover&source=gbs_api",
       "accessViewStatus": "SAMPLE",
       "quoteSharingAllowed": false
      },
      "searchInfo": {
       "textSnippet": "INTRODUCTION To the reader This book will teach you the skills needed to \u003cbr\u003e\nhandle problems that both theoreticians and experimentalists may encounter in \u003cbr\u003e\nany \u003cb\u003eangular\u003c/b\u003e momentum calculations of quantum physics. You will learn to treat \u003cbr\u003e\nthese&nbsp;..."
      }
     },
     {
      "kind": "books#volume",
      "id": "oZ8L7j5OAmQC",
      "etag": "z9VvJvsHI+4",
      "selfLink": "https://www.googleapis.com/books/v1/volumes/oZ8L7j5OAmQC",
      "volumeInfo": {
       "title": "High Angular Resolution Studies of the Structure and Evolution of Protoplanetary Disks",
       "authors": [
        "Joshua Eisner"
       ],
       "publisher": "Universal-Publishers",
       "publishedDate": "2005",
       "description": "Young stars are surrounded by massive, rotating disks of dust and gas, which supply a reservoir of material that may be incorporated into planets or accreted onto the central star. In this dissertation, I use high angular resolution observations at a range of wavelengths to understand the structure, ubiquity, and evolutionary timescales of protoplanetary disks. First, I describe a study of Class I protostars, objects believed to be at an evolutionary stage between collapsing spherical clouds and fully-assembled young stars surrounded by protoplanetary disks. I use a Monte Carlo radiative transfer code to model new 0.9 micron scattered light images, 1.3 mm continuum images, and broadband spectral energy distributions. This modeling shows that Class I sources are probably surrounded by massive protoplanetary disks embedded in massive infalling envelopes. For the best-fitting models of the circumstellar dust distributions, I determine several important properties, including envelope and disk masses, mass infall rates, and system inclinations, and I use these results to constrain the evolutionary stage of these objects. Second, I discuss observations of the innermost regions of more evolved disks around T Tauri and Herbig Ae/Be stars, obtained with the Palomar Testbed and Keck Interferometers. I constrain the spatial and temperature structure of the circumstellar material at sub-AU radii, and demonstrate that lower-mass stars are surrounded by inclined disks with puffed-up inner edges 0.1-1 AU from the star. In contrast, the truncated inner disks around more massive stars may not puff-up, indicating that disk structure depends on stellar properties. I discuss the implications of these results for disk accretion, terrestrial planet formation and giant planet migration. Finally, I put these detailed studies of disk structure into a broader context by constraining the mass distribution and evolutionary timescales of circumstellar disks. Using the Owens Valley Millimeter Array, I mapped the millimeter continuum emission toward \u003e300 low-mass stars in the NGC 2024 and Orion Nebula clusters. These observations demonstrate that the average disk mass in each cluster is comparable to the \"minimum-mass protosolar nebula,\" and that there may be disk evolution on one million year timescales.",
       "industryIdentifiers": [
        {
         "type": "ISBN_13",
         "identifier": "9781581122800"
        },
        {
         "type": "ISBN_10",
         "identifier": "1581122802"
        }
       ],
       "readingModes": {
        "text": false,
        "image": true
       },
       "pageCount": 240,
       "printType": "BOOK",
       "categories": [
        "Science"
       ],
       "maturityRating": "NOT_MATURE",
       "allowAnonLogging": false,
       "contentVersion": "preview-1.0.0",
       "panelizationSummary": {
        "containsEpubBubbles": false,
        "containsImageBubbles": false
       },
       "imageLinks": {
        "smallThumbnail": "http://books.google.com/books/content?id=oZ8L7j5OAmQC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
        "thumbnail": "http://books.google.com/books/content?id=oZ8L7j5OAmQC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
       },
       "language": "en",
       "previewLink": "http://books.google.co.in/books?id=oZ8L7j5OAmQC&pg=PA14&dq=angular&hl=&cd=10&source=gbs_api",
       "infoLink": "https://play.google.com/store/books/details?id=oZ8L7j5OAmQC&source=gbs_api",
       "canonicalVolumeLink": "https://play.google.com/store/books/details?id=oZ8L7j5OAmQC"
      },
      "saleInfo": {
       "country": "IN",
       "saleability": "FOR_SALE",
       "isEbook": true,
       "listPrice": {
        "amount": 1948.63,
        "currencyCode": "INR"
       },
       "retailPrice": {
        "amount": 1948.63,
        "currencyCode": "INR"
       },
       "buyLink": "https://play.google.com/store/books/details?id=oZ8L7j5OAmQC&rdid=book-oZ8L7j5OAmQC&rdot=1&source=gbs_api",
       "offers": [
        {
         "finskyOfferType": 1,
         "listPrice": {
          "amountInMicros": 1.94863E9,
          "currencyCode": "INR"
         },
         "retailPrice": {
          "amountInMicros": 1.94863E9,
          "currencyCode": "INR"
         }
        }
       ]
      },
      "accessInfo": {
       "country": "IN",
       "viewability": "PARTIAL",
       "embeddable": true,
       "publicDomain": false,
       "textToSpeechPermission": "ALLOWED",
       "epub": {
        "isAvailable": false
       },
       "pdf": {
        "isAvailable": true,
        "acsTokenLink": "http://books.google.co.in/books/download/High_Angular_Resolution_Studies_of_the_S-sample-pdf.acsm?id=oZ8L7j5OAmQC&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
       },
       "webReaderLink": "http://play.google.com/books/reader?id=oZ8L7j5OAmQC&hl=&printsec=frontcover&source=gbs_api",
       "accessViewStatus": "SAMPLE",
       "quoteSharingAllowed": false
      },
      "searchInfo": {
       "textSnippet": "Interferometry provides a way to attain very high \u003cb\u003eangular\u003c/b\u003e resolution without \u003cbr\u003e\nbuilding a very large-aperture telescope. Small apertures separated by a \u003cbr\u003e\nbaseline B are used to “synthesize” a larger aperture and thus obtain an \u003cb\u003eangular\u003c/b\u003e \u003cbr\u003e\nresolution&nbsp;..."
      }
     }
    ]
   }
  public searchInputData: any;
  
   constructor(private homeService: HomeService, private commonService: CommonService) { }

   ngOnInit() {
     this.searchInputData = this.commonService.searchInput.subscribe();
   }
 
   public fetchBooksRecords() {
     const booksData = this.homeService.searchBooks(this.searchInputData);
   }
 



}
