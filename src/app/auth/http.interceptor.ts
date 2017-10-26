import {Observable} from 'rxjs/Observable';
import {Injectable, Injector} from '@angular/core';
import {HttpEvent, HttpInterceptor, HttpHandler, HttpRequest} from '@angular/common/http';
import {CookieService} from 'ngx-cookie';

@Injectable()
export class AuthenticationInterceptor implements HttpInterceptor {
  token: string;
  cookieService;

  constructor(private injector: Injector) {
    this.cookieService = this.injector.get(CookieService);
  }

  intercept(req: HttpRequest<any>, next: HttpHandler) {

    if (localStorage.getItem('currentUser') === null) {
      if (this.cookieService.get('token')) {
        let getCookies = this.cookieService.get('token');
        let object = getCookies.split(';');
        let cookieObj = JSON.parse(object[0]);
        console.log(getCookies);
        this.token = cookieObj.access_token;
      }
    }

    const authReq = req.clone({headers: req.headers.set('Authorization', 'Bearer ' + this.token)});
    return next.handle(authReq);
  }
}



// import {Injectable, Injector} from "@angular/core";
// import {HttpEvent, HttpHandler, HttpInterceptor, HttpResponse} from "@angular/common/http";
// import {HttpRequest} from "@angular/common/http";
// import {Observable} from "rxjs/Observable";
// import {SiteService} from "../services/site.service";
// import {Router} from "@angular/router";
// import {LoadingService} from "../../components/loading/loading.service";
// import {AuthenticationService} from "../services/authentication.service";
//
// @Injectable()
// export class AuthInterceptor implements HttpInterceptor {
//
//   constructor(private router: Router,
//               private siteService: SiteService,
//               private loadingService: LoadingService,
//               private injector: Injector) {
//   }
//
//
//
//   private fixUrl(url: string) {
//     if (url.indexOf('http://') >= 0 || url.indexOf('https://') >= 0)
//       return url;
//     else
//       return this.siteService.apiDomain() + url;
//   }
//
//   intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
//
//     const clonedRequest = req.clone({
//       headers: req.headers.set('Authorization', 'Bearer ' + localStorage.getItem('JWToken')),
//       url: this.fixUrl(req.url)
//     });
//
//     let authenticationService = this.injector.get(AuthenticationService);
//
//     this.loadingService.start();
//     const started = Date.now();
//     return next.handle(clonedRequest)
//       .do(event => {
//         if (event instanceof HttpResponse) {
//
//           const elapsed = Date.now() - started;
//           console.log('%c Request for ' + this.fixUrl(req.urlWithParams) + ' took ' + elapsed + ' ms.', 'background: #222; color: yellow');
//         }
//       })
//       ._finally(() => {
//         this.loadingService.stop();
//       })
//       .catch((res) => {
//         if (res.status === 401 || res.status === 403) {
//           this.loadingService.start();
//           return authenticationService.refreshToken().flatMap((data: any) => {
//             this.loadingService.stop();
//             if (data.token !== '') {
//               localStorage.setItem('currentUser', JSON.stringify(data.user));
//               localStorage.setItem('currentUserPermissions', JSON.stringify(data.permissions));
//               localStorage.setItem('JWToken', data.token);
//             } else {
//               localStorage.removeItem('currentUser');
//               localStorage.removeItem('currentUserPermissions');
//               localStorage.removeItem('JWToken');
//               this.router.navigate(['./auth/login']);
//               return Observable.throw(res);
//             }
//             let clonedRequestRepeat = req.clone({
//               headers: req.headers.set('Authorization', 'Bearer ' + localStorage.getItem('JWToken')),
//               url: this.fixUrl(req.url)
//             });
//             return next.handle(clonedRequestRepeat).do(event => {
//               if (event instanceof HttpResponse) {
//
//                 const elapsed = Date.now() - started;
//                 console.log('%c Request for ' + req.urlWithParams + ' took ' + elapsed + ' ms.', 'background: #222; color: yellow');
//               }
//             });
//           })
//         } else {
//           return Observable.throw(res);
//         }
//
//       });
//
//   }
// }
