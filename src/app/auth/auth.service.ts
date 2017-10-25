import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {CookieService} from 'ngx-cookie';
import {testHttpService} from './http.service';

@Injectable()
export class AuthorizationService {
  constructor(private cookieService: CookieService,
              private router: Router,
              private httpService: testHttpService) {
  }

  getCurrentUser() {
      return this.httpService.get('http://qa.millhouse.com:8443/current_user').map((data) => {
        return data;
      }, (error) => {
        alert('Authorization error: ' + error);
      });
  }

  // getToken() {
  //   if (this.cookieService.get('token')) {
  //     let getCookies = this.cookieService.get('token');
  //     let object = getCookies.split(';');
  //     let cookieObj = JSON.parse(object[0]);
  //
  //     return cookieObj.access_token;
  //   }
  //
  //    return undefined;
  // }

  logout() {
    this.cookieService.remove('token');
    localStorage.removeItem('currentUser');
    this.router.navigate(['/tracking']);
  }
}
