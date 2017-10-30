import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {AuthorizationService} from './auth.service';
import {User} from './user.model';
import {ToasterService} from 'angular2-toaster';

@Injectable()
export class AuthGuard implements CanActivate {
  currentUser: User;
  permissionsToCheck;

  constructor(private auth: AuthorizationService,
              private toasterService: ToasterService) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    this.permissionsToCheck = route.data['roles'];

    if (this.currentUser !== null) {
      console.log('Current user !== null');
      if (this.permissionsToCheck) {
        let resultDifference = this.currentUser.permissions.filter(e => this.permissionsToCheck.find(a => e === a));
        if (this.currentUser.permissions.length > resultDifference.length) {
          console.log('true');
          return true;
        }
      } else {
        this.toasterService.pop({
          type: 'error',
          title: 'Error!',
          body: 'You have no permissions to get this module!'
        });

        return false;
      }
    }

    if (this.currentUser === null) {
      console.log('Current user === null');
      this.auth.getCurrentUser().subscribe(
        (data) => {
          this.currentUser = data;

          if (this.permissionsToCheck) {
            let resultDifference = this.currentUser.permissions.filter(e => this.permissionsToCheck.find(a => e == a));
            if (this.currentUser.permissions.length > resultDifference.length) {
              console.log('user === null', true);
              return true;
            }
          } else {
            console.log('permission check - if no - go away');
            this.toasterService.pop({
              type: 'error',
              title: 'Error!',
              body: 'You have no permissions to get this module!'
            });

            return false;
          }
        }
      );
    } else {
      this.toasterService.pop({
        type: 'error',
        title: 'Error!',
        body: 'Something went wrong, please contact with Administrator.'
      });

      this.auth.loginRedirect();
    }

    return false;
  }
}
