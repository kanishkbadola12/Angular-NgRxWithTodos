import { Injectable } from '@angular/core';
import { map, Observable, take } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { PostInterface } from '../modules/posts/models/post.interface';

@Injectable()
export class PostsService {
  constructor(private http: HttpClient) {}

  getFirst100Posts(): Observable<PostInterface[]>  {
    return this.http.get<PostInterface[]>('https://jsonplaceholder.typicode.com/todos/')
      .pipe(
        take(100),
        map((data: PostInterface[]) => data.slice(0, 100))
      )
  }
}