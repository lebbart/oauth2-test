import {AfterContentInit, Component, OnInit} from '@angular/core';
import {AuthorizationService} from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterContentInit {
  currentUser;

  constructor(private authService: AuthorizationService) {

    // let token = {
    //   'access_token': 'f4523689-5b37-4863-9b63-c1aa51dd0ff3',
    //   'token_type': 'bearer',
    //   'refresh_token': '35845ca9-8a1a-4f09-8b06-48630fd1c95a',
    //   'expires_in': 124456460,
    //   'scope': 'ui'
    // };
    //
    // let modern_token = JSON.stringify(token);
    // let cookieString = modern_token + ';domain=http://localhost:4200;path=/';
    // this.cookieService.put('token', cookieString);

    if (localStorage.getItem('currentUser')) {
      console.log('Local storage get User');
      this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    } else {
      this.authService.getCurrentUser().subscribe(
        (data: Response) => {
          console.log('Get user from http request.');
          localStorage.setItem('currentUser', JSON.stringify(data));
          this.currentUser = data;
        }
      );
    }
  }

  ngOnInit() {
    console.log('onInit');
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit');
  }

  onLogout() {
    this.authService.logout();
    this.currentUser = null;
  }
}


// TODO: Step 1 -> we start app from redirection from login form outside
// TODO: We came to '/' state and need to check if we have token -> if we don't -> move back to Login page outside.
// TODO: If we have our token object in COOKIES:
// TODO: if we have it -> get currentUser() from backend request
// TODO: if CurrentUser Have permissions -> redirection to his paths
// TODO: We also need to check if user logged in after each move to next() path check if we can go there by using CanAccess AuthGuard service
// TODO: Logout()
