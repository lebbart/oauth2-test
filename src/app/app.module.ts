import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {AppRoutesModule} from './app-routing.module';
import {TrackingModule} from './tracking/tracking.module';
import {CustomersModule} from './customers/customers.module';
import {CookieModule, CookieService} from 'ngx-cookie';
import {NotFoundComponent} from './not-found/not-found.component';
import {DriversModule} from './drivers/drivers.module';

// Authentification needs
import {HttpModule} from '@angular/http';
import {OAuthModule} from 'angular-oauth2-oidc';
import {LoginComponent} from './login/login.component';
import {AuthorizationService} from './auth/auth.service';
import {AuthenticationInterceptor} from "./auth/http.interceptor";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {testHttpService} from "./auth/http.service";

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutesModule,
    TrackingModule,
    CustomersModule,
    DriversModule,
    HttpClientModule,
    CookieModule.forRoot(),
    HttpModule,
    OAuthModule.forRoot()
  ],
  providers: [
    AuthorizationService, {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthenticationInterceptor,
    multi: true,
  }, testHttpService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
