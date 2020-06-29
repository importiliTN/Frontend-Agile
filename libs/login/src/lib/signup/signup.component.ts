import { Component, OnInit } from '@angular/core';
import { User } from '@importili/core-data';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'importili-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  user : User = {
    firstName : '',
    lastName : '',
    active : false,
    phoneNumber : '',
    email : '',
    role : '',
    password : '',
    cin : null,
    id : null
  };
  pwdrep : string;
  ok = true;
  resp : string;
  constructor(private authService : AuthService) { }

  ngOnInit(): void {
  }

  signUp(user) {
    console.log("clicked1");
    if(this.pwdrep!== user.password) {
      this.ok = false;
      this.resp = "Password doesn't match"
      alert(this.resp)
      console.log("clicked2");
    }
    else {
      this.authService.signup(user);
      console.log("clicked3");
    }

  };

}
