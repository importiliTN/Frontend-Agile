import { Component, OnInit } from '@angular/core';
import { User } from '@importili/core-data';
import { UsersService } from '../../../../../libs/core-data/src/lib/user/users.service';

@Component({
  selector: 'importili-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
  users : User[];
  constructor(private usersService : UsersService) { }

  ngOnInit(): void {
    this.usersService.all().subscribe(result => {
      this.users = result;
    })
  }
  delete(user) {
    this.usersService.delete(user.id).subscribe(result => {
      this.getUsers();
    });
  }

  getUsers() {
    this.usersService.all().subscribe(
      response =>{this.users = response;}
    );
  };

  updateUser(user) {
    this.usersService.update(user)
      .subscribe(result => {
        this.getUsers();
      });
  }

}
