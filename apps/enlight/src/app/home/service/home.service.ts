import { Injectable } from '@angular/core';
import { HttpWrapperService } from '../../../../../../libs/services/src/lib/http/http-wrapper.service';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  constructor(private httpWrapperService: HttpWrapperService) {}

  public searchBooks(keyword: string) {
    //TODO: Request google API through http wrapper service and bind the results
  }
}
