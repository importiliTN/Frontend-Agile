import { Component, OnInit } from '@angular/core';
import { AuthService} from '../auth/auth.service';
import { TokensStorageService } from '../tokens/tokens-storage.service';
import { FormsModule } from '@angular/forms';
import  { Router } from '@angular/router';


@Component({
  selector: 'importili-login-component',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email = '';
  password = '';
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  role: string;

  constructor(private authService: AuthService, private tokenStorage: TokensStorageService, private router: Router) { }

  ngOnInit() {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      if (this.tokenStorage.getToken().indexOf('ROLE_ADMIN') !== -1)
      {this.role = 'ROLE_ADMIN';
        this.router.navigateByUrl('/');}
      else {
        this.role = 'ROLE_USER';
        this.router.navigateByUrl('/');}
    }
  }

  onSubmit() {
    this.authService.login(this.email,this.password).subscribe(
      data => {
        this.isLoginFailed = false;
        this.isLoggedIn = true;
        console.log("clicked")
        if (this.tokenStorage.getUser().role === 'ROLE_ADMIN'){
          this.role = 'ROLE_ADMIN';
          this.router.navigateByUrl('/');
        }
        else {this.role = 'ROLE_USER';
          this.router.navigateByUrl('/');}
      }
    );
    this.reloadPage();
  }

  reloadPage() {
    window.location.reload();
  }

}
