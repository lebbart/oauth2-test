import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {AppRoutesModule} from './app-routing.module';
import {TrackingModule} from './tracking/tracking.module';
import {CustomersModule} from './customers/customers.module';
import {CookieModule} from 'ngx-cookie';
import {NotFoundComponent} from './not-found/not-found.component';
import {DriversModule} from './drivers/drivers.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {HttpModule} from '@angular/http';
import {OAuthModule} from 'angular-oauth2-oidc';
import {LoginComponent} from './login/login.component';
import {AuthorizationService} from './auth/auth.service';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {AuthenticationInterceptor} from './auth/http.interceptor';
import {HttpService} from './auth/http.service';
import {AuthGuard} from './auth/auth.guard';

import {ToasterModule} from 'angular2-toaster';

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
    OAuthModule.forRoot(),
    BrowserAnimationsModule,
    ToasterModule
  ],
  providers: [
    AuthenticationInterceptor,
    AuthorizationService,
    HttpService,
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthenticationInterceptor,
      multi: true,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
