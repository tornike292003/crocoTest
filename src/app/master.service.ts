import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  baseUrl = 'https://jsonplaceholder.typicode.com/';

  constructor(private http:HttpClient) { }

  getUsers():Observable<any[]>{
    return this.http.get<any[]>(this.baseUrl + 'users');
  }

  getPosts():Observable<any[]>{
    return forkJoin({
      posts: this.http.get<any[]>(this.baseUrl + 'posts'),
      users: this.http.get<any[]>(this.baseUrl + 'users')
    }).pipe(
      map(({posts, users}) => posts.map(post => ({
        ...post,
        username: users.find(u => u.id === post.userId)?.name || 'No user'
      })))
    );
  }

  getPostById(id:number):Observable<any[]>{
    return this.http.get<any[]>(`${this.baseUrl}posts?userId=${id}`);
  }

  getTodo():Observable<any[]>{
    return this.http.get<any[]>(this.baseUrl + 'todos');
  }
}
