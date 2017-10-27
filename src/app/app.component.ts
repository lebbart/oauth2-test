import {AfterContentInit, Component, OnInit} from '@angular/core';
import {AuthorizationService} from './auth/auth.service';
import {Toast, ToasterService} from "angular2-toaster";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterContentInit {
  currentUser;

  constructor(private authService: AuthorizationService,
              private toasterService: ToasterService) {


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

  popToast() {
    this.toasterService.pop({
      type: 'success',
      title: 'Show this Toast and see it!',
      body: 'Bo bo toast',
      showCloseButton: true
    });
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
