import { Injectable } from '@angular/core';
import { delay, map, Observable, of, take } from 'rxjs';
import { PostInterface } from '../models/post.interface';
import { HttpClient } from '@angular/common/http';

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