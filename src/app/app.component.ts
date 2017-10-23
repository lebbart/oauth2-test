import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
}


// TODO: Step 1 -> we start app from redirection from login form outside
// TODO: We came to '/' state and need to check if we have token -> if we don't -> move back to Login page outside.
// TODO: If we have our token object in COOKIES:
// TODO: if we have it -> get currentUser() from backend request
// TODO: if CurrentUser Have permissions -> redirection to his paths
// TODO: We also need to check if user logged in after each move to next() path check if we can go there by using CanAccess AuthGuard service
// TODO: Logout()
