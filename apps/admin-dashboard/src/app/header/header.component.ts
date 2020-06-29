import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from '@importili/login';

@Component({
  selector: 'importili-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() logged : boolean;
  constructor(private authService : AuthService) { }

  home = {path : '', title : 'Home'};
  users = {path : 'users', title : 'Users'};

  ngOnInit(): void {
  }

  logout() {
    this.authService.logout();
    window.location.reload();
  }
}
