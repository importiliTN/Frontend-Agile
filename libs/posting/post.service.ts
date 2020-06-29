import { Injectable } from '@angular/core';
import { Post } from './post';
import {Postlist} from './postlist';
import {Observable, of} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Query} from './query';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(
    private http: HttpClient,
  ) { }

  private url='http://localhost:8080/post';

  addPost(post : Post):Observable<any>
  {
    return this.http.post(`${this.url}/add`,post,httpOptions);
  }

  getPosts(page : number):Observable<Postlist>
  {
    return this.http.get<Postlist>(`${this.url}/list/${page}`,httpOptions);
  }

  getPost(id : number):Observable<Post>
  {
    return this.http.get<Post>(`${this.url}/${id}`,httpOptions);
  }

  searchPosts(query:Query):Observable<Postlist>
  {
    return this.http.post<Postlist>(`${this.url}/search`,query,httpOptions);
  }

}
