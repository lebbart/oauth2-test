import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import {AuthorizationService} from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
  currentUser;

  constructor(private auth: AuthorizationService) {
    this.currentUser = localStorage.getItem('currentUser');
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.currentUser !== null) {
      return true;
    }

    this.auth.loginRedirect();
    return false;
  }
}
