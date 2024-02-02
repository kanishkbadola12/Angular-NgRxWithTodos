import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as PostsActions from '../../../../store/actions';
import { Observable } from 'rxjs';
import { errorSelector, isLoadingSelector, postsSelector, selectedPostSelector } from '../../../../store/selectors';
import { PostInterface } from '../../models/post.interface';
import { AppStateInterface } from '../../../../models/app-state-interface';

@Component({
  selector: 'posts-grid',
  templateUrl: './posts-grid.component.html',
  styleUrl: './posts-grid.component.css'
})

export class PostsGridComponent implements OnInit {
  isLoading$: Observable<boolean>;
  error$: Observable<string | null>;
  posts$: Observable<PostInterface[]>;

  postProperties = ['title', 'userId', 'id', 'completed'];
  count = 0;

  constructor(private store: Store<AppStateInterface>) {
    this.isLoading$ = this.store.pipe(select(isLoadingSelector));
    this.error$ = this.store.pipe(select(errorSelector));
    this.posts$ = this.store.pipe(select(postsSelector));
  }

  dispatchSelectedPost(index: number): void {
    this.count = (this.count + 1) % this.postProperties.length;
    this.store.dispatch(PostsActions.setCurrentSelectedProperty({property: this.postProperties[this.count]}));
    this.store.dispatch(PostsActions.setUpdatedPosts({index: index}));
    this.store.dispatch(PostsActions.setSelectedPostIndex({index: index + 1}));
    this.posts$ = this.store.pipe(select(selectedPostSelector));
  }

  ngOnInit(): void {
    this.store.dispatch(PostsActions.getPosts());
  }
}
