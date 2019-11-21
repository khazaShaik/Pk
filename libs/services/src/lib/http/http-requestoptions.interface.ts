import { HttpHeaders } from '@angular/common/http';

export declare type HttpObserveOptions = 'body' | 'events' | 'response';
export declare type HttpResponseOptions =
  | 'arraybuffer'
  | 'blob'
  | 'json'
  | 'text';

export interface IRequestOptions {
  body?: any;
  headers?: HttpHeaders;
  reportProgress: boolean;
  responseType?: HttpResponseOptions;
  observe: HttpObserveOptions;
}
