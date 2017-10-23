import {BrowserModule} from '@angular/platform-browser';
import {NgModule, OnInit} from '@angular/core';

import {AppComponent} from './app.component';
import {AppRoutesModule} from './app-routing.module';
import {TrackingModule} from './tracking/tracking.module';
import {CustomersModule} from './customers/customers.module';
import {CookieModule} from 'ngx-cookie';
import {AuthService} from './auth/auth.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutesModule,
    TrackingModule,
    CustomersModule,
    CookieModule.forRoot()
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule implements OnInit {

  constructor(private auth: AuthService) {
    let token = {
      'access_token': 'f4523689-5b37-4863-9b63-c1aa51dd0ff3',
      'token_type': 'bearer',
      'refresh_token': '35845ca9-8a1a-4f09-8b06-48630fd1c95a',
      'expires_in': 124456460,
      'scope': 'ui'
    };
    let modern_token = JSON.stringify(token);
    document.cookie = 'token=' + modern_token + ';domain=http://localhost:4200;path=/';
    console.log(modern_token);

    if (this.auth.checkToken('token')) {
      console.log("Some Token " + modern_token);
    }
  }

  ngOnInit() {

  }
}
