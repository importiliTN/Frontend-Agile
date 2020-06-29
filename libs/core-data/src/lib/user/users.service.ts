import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from './user'

const BASE_URL = 'http://localhost:8080/admin/';
const auth_token = 'Bearer '+localStorage.getItem('auth-token');
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  
  
  model = 'users';
  constructor(private httpClient:HttpClient) {
   }

  getUrl() {
    return `${BASE_URL}${this.model}`;
  }

  getUrlForId(id) {
    return `${BASE_URL}${this.model}/${id}`;
  }

  getUser(id) {
    return this.httpClient.get<User>(this.getUrlForId(id));
  }

  all() {
    return this.httpClient.get<User[]>(this.getUrl(), httpOptions);
  }

  create(user) {
    return this.httpClient.post(this.getUrl(),user , httpOptions);
  }

  update(user) {
    return this.httpClient.patch(this.getUrlForId(user.id),user);
  }

  delete(id) {
    return this.httpClient.delete(this.getUrlForId(id));
  }
}
