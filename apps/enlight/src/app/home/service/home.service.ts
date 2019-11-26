import { Injectable } from '@angular/core';
import { HttpWrapperService, CommonService } from '@workspace/libs/services';
import { HOME_CONSTANTS } from '../../utils/constants';
import { map, catchError } from 'rxjs/operators';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  responseData: unknown;
  public defaultHeaders: HttpHeaders = new HttpHeaders();

  constructor(private httpWrapperService: HttpWrapperService, private commonService: CommonService) {
    this.defaultHeaders.append('Content-Type', 'application/json; charset=utf-8');
  }

  public searchBooks(keyword: string): Observable<any> {
    // TODO: Request google API through http wrapper service and bind the 

    let URL = HOME_CONSTANTS.URL
    URL = URL + keyword;  
    return this.httpWrapperService.get(URL, this.defaultHeaders, {}, {}).pipe(map((response) => {
      this.commonService.booksResponseData.next(response.body);
      return response.body;
    }),
      catchError((error) => {
        throw error;
      }));
  }
}
