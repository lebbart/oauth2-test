import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {
  currentUser;

  constructor(private router: Router) {
    this.currentUser = localStorage.getItem('currentUser');
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.currentUser !== null) {
      return true;
    }

    this.router.navigate(['/login']);
    return false;
  }
}
