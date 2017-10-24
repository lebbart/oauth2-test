import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {AppRoutesModule} from './app-routing.module';
import {TrackingModule} from './tracking/tracking.module';
import {CustomersModule} from './customers/customers.module';
import {CookieModule, CookieService} from 'ngx-cookie';
import { NotFoundComponent } from './not-found/not-found.component';
import {DriversModule} from './drivers/drivers.module';

// Authentification needs
import {HttpModule} from '@angular/http';
import { OAuthModule } from 'angular-oauth2-oidc';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutesModule,
    TrackingModule,
    CustomersModule,
    DriversModule,
    CookieModule.forRoot(),
    HttpModule,
    OAuthModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor(private cookieService: CookieService) {

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

    // if (this.auth.checkToken('token') === undefined || !this.auth.checkToken('token')) {
    //   this.cookieService.put('token', cookieString);
    // } else  {
    //   console.log('Token exist - we do not need nothing to put!');
    // }

    // if (this.auth.checkToken('token')) {
    //   this.auth.getCurrentUser(token);
    // } else {
    //   alert('Something goes wrong!');
    // }

  }
}
