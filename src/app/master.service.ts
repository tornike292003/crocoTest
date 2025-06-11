import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin, map, Observable } from 'rxjs';
import { Users } from './users.model';
import { Posts } from './posts.model';
import { Todo } from './todo.model';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  baseUrl = 'https://jsonplaceholder.typicode.com/';

  constructor(private http:HttpClient) { }

  getUsers():Observable<Users[]>{
    return this.http.get<Users[]>(this.baseUrl + 'users');
  }

  getPosts():Observable<any[]>{
    return forkJoin({
      posts: this.http.get<Posts[]>(this.baseUrl + 'posts'),
      users: this.http.get<Users[]>(this.baseUrl + 'users')
    }).pipe(
      map(({posts, users}) => posts.map(post => ({
        ...post,
        username: users.find(u => u.id === post.userId)?.name || 'No user'
      })))
    );
  }

  getPostById(id:number):Observable<Posts[]>{
    return this.http.get<Posts[]>(`${this.baseUrl}posts?userId=${id}`);
  }

  getTodo():Observable<Todo[]>{
    return this.http.get<Todo[]>(this.baseUrl + 'todos');
  }
}
