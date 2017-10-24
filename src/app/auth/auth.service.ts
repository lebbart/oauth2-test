import {Injectable} from '@angular/core';
import {CookieService} from 'ngx-cookie';
import {Http} from '@angular/http';
import {testHttpService} from './http.service';

@Injectable()
export class AuthorizationService {

  constructor(private cookieService: CookieService, private http: Http, private picService: testHttpService) {
  }

  getCurrentUser(token) {
    console.log(token);


    this.picService.get('http://qa.millhouse.com:8443/current_user').subscribe(value => {
        console.log(value);
      },
      error => {
        console.log(error);
      });

  }

  getToken() {
    let json = this.cookieService.get('token');
    let tokenObj = json.split(';');
    let getObj = JSON.parse(tokenObj[0]);

    return getObj.access_token;
  }

  logout() {

  }

}
