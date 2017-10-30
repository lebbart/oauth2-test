import {Injectable} from '@angular/core';
import {CookieService} from 'ngx-cookie';
import {HttpService} from './http.service';

@Injectable()
export class AuthorizationService {
  redirectLink: string = 'http://localhost:9100/?redirect_url=';

  constructor(private cookieService: CookieService,
              private httpService: HttpService) {
  }

  getCurrentUser() {
      return this.httpService.get('http://qa.millhouse.com:8443/current_user').map((data) => {
        return data;
      }, (error) => {
        alert('Authorization error: ' + error);
      });
  }

  // getToken() {
  //   // TODO: this func should be taken from interceptor service!
  //
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

  loginRedirect() {
    window.location.href = this.redirectLink + window.location.href;
  }

  logout() {
    this.cookieService.remove('token');
    localStorage.removeItem('currentUser');
    this.loginRedirect();
  }
}
