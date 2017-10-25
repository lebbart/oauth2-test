import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class testHttpService {
  constructor(private httpClient: HttpClient) {}

  public get(url: string): Observable<any> {
    return this.httpClient.get(url);
  }

}
