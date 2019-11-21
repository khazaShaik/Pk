import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  public searchInput: BehaviorSubject<string> = new BehaviorSubject(null);

  constructor() {}
}
