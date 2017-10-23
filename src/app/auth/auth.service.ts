import {Injectable, OnInit} from '@angular/core';
// import {CookieService} from 'ngx-cookie';

@Injectable()
export class AuthService implements OnInit {

  // constructor(private cookieService: CookieService) {}

  checkToken(key: string) {
    // return this.cookieService.get(key);
  }

  getCurrentUser() {}

  logout() {}
}


// TODO: Step 1 -> we start app from redirection from login form outside
// TODO: We came to '/' state and need to check if we have token -> if we don't -> move back to Login page outside.
// TODO: If we have our token object in COOKIES:
// TODO: if we have it -> get currentUser() from backend request
// TODO: if CurrentUser Have permissions -> redirection to his paths
// TODO: We also need to check if user logged in after each move to next() path check if we can go there by using CanAccess AuthGuard service
// TODO: Logout()
