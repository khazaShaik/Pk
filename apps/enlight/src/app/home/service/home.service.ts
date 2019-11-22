import { Injectable } from '@angular/core';
import { HttpWrapperService } from '@workspace/libs/services';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  constructor(private httpWrapperService: HttpWrapperService) {}

  public searchBooks(keyword: string) {
    //TODO: Request google API through http wrapper service and bind the results
  }
}
