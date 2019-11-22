import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class CommonService {
  public searchInput: BehaviorSubject<string> = new BehaviorSubject(null);

  constructor() {}
}
