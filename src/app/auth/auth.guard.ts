import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {AuthorizationService} from './auth.service';
import {User} from './user.model';
import {ToasterService} from 'angular2-toaster';

@Injectable()
export class AuthGuard implements CanActivate {
  currentUser: User;

  constructor(private auth: AuthorizationService, private toasterService: ToasterService) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.currentUser !== null) {
      if (this.currentUser) {
        console.log(this.currentUser.permissions);
        this.toasterService.pop({
          type: 'success',
          title: 'Success!',
          body: 'You have permissions to get this route!'
        });
        // TODO: check if currentUser have permissions to check
      }

      // get current state
      // console.log(state.url);

      return true;
    }

    this.toasterService.pop({
      type: 'error',
      title: 'Error!',
      body: 'You can\'t get this route because of Permission',
      showCloseButton: true
    });

    this.auth.loginRedirect();
    return false;
  }
}
