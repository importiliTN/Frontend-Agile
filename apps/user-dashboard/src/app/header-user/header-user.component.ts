import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { AuthService } from '@importili/login';

@Component({
  selector: 'importili-header',
  templateUrl: './header-user.component.html',
  styleUrls: ['./header-user.component.css']
})
export class HeaderUserComponent implements OnInit {
  @Input() logged : boolean;
  constructor(private authService : AuthService) { }

  home = {path : '', title : 'Home'};
  create = {path : 'create', title : 'Share Post'};

  ngOnInit(): void {
  }

  logout() {
    this.authService.logout();
    window.location.reload();
  }
}
