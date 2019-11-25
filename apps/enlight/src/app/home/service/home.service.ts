import { Injectable } from '@angular/core';
import { HttpWrapperService } from '@workspace/libs/services';
import { HOME_CONSTANTS } from '../../utils/constants';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  constructor(private httpWrapperService: HttpWrapperService) {}

  public searchBooks(keyword: string) {
    // TODO: Request google API through http wrapper service and bind the 
    const URL = HOME_CONSTANTS.URL
    this.httpWrapperService.get(URL).subscribe((data) => {
     return data;
  });

  }
}
