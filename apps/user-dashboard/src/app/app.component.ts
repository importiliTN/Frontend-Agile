import { Component } from '@angular/core';
import { AuthService } from '@importili/login';

@Component({
  selector: 'importili-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'admin-dashboard';
  loggedIn : boolean;
  constructor(private authService : AuthService) {
    this.loggedIn = this.authService.isUserLoggedIn();
  }

}
