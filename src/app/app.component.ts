import { OAuthService } from 'angular-oauth2-oidc';
import { JwksValidationHandler } from 'angular-oauth2-oidc';
import { authConfig } from './auth.config';
import { Component } from '@angular/core';
import { AuthorizationService } from './auth/auth.service';
import { CookieService } from 'ngx-cookie';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private oauthService: OAuthService,
              private authService: AuthorizationService,
              private cookieService: CookieService) {

    let token = {
      'access_token': 'f4523689-5b37-4863-9b63-c1aa51dd0ff3',
      'token_type': 'bearer',
      'refresh_token': '35845ca9-8a1a-4f09-8b06-48630fd1c95a',
      'expires_in': 124456460,
      'scope': 'ui'
    };

    let modern_token = JSON.stringify(token);
    let cookieString = modern_token + ';domain=http://localhost:4200;path=/';
    this.cookieService.put('token', cookieString);

    if (this.authService.getToken() !== undefined) {
      this.authService.getCurrentUser(this.authService.getToken());
    }





    this.configureWithNewConfigApi();

    this.oauthService.tryLogin({
      onTokenReceived: (info) => {
        console.log('state', info.state);
      }
    });


  }

  private configureWithNewConfigApi() {
    this.oauthService.configure(authConfig);
    this.oauthService.tokenValidationHandler = new JwksValidationHandler();
    this.oauthService.loadDiscoveryDocumentAndTryLogin();
  }
}


// TODO: Step 1 -> we start app from redirection from login form outside
// TODO: We came to '/' state and need to check if we have token -> if we don't -> move back to Login page outside.
// TODO: If we have our token object in COOKIES:
// TODO: if we have it -> get currentUser() from backend request
// TODO: if CurrentUser Have permissions -> redirection to his paths
// TODO: We also need to check if user logged in after each move to next() path check if we can go there by using CanAccess AuthGuard service
// TODO: Logout()
