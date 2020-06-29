import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, BehaviorSubject, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { TokensStorageService } from '../tokens/tokens-storage.service';
import { LoginResponse, User } from '@importili/core-data';

const AUTH_API = 'http://localhost:8080/';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUserSubject: BehaviorSubject<LoginResponse>;
  public currentUser: Observable<LoginResponse>;

  constructor(private http: HttpClient, private router: Router, private tokenService : TokensStorageService) {
    this.currentUserSubject = new BehaviorSubject<LoginResponse>(JSON.parse(localStorage.getItem('auth_token')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  login(username : string, password : string) : Observable<any> {
    return this.http.post(AUTH_API + 'login', {
      username,
      password
    }, httpOptions).pipe(map (
      (userData: any) => {
        if (userData) {
          this.tokenService.saveToken('Bearer '+ userData.accessToken);
          this.tokenService.saveUser(userData);
          this.currentUserSubject.next(userData);
        }
        return userData;
      }
    ));
  }

  signup(user : User) {
    this.http.post<User>(AUTH_API+'signup',user,httpOptions).subscribe(err => {
      alert(err);
    });
    window.location.reload();
  }


  isUserLoggedIn() {
    let user = this.tokenService.getUser();
    return (user !== null)
  }


  logout() {
    this.tokenService.signOut();
    this.currentUserSubject.next(null);
  }

}
