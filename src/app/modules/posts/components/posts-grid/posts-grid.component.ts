import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as PostsActions from '../../../../store/actions';
import { Observable, combineLatest } from 'rxjs';
import { errorSelector, isLoadingSelector, postsSelector, selectedPostIndexSelector, selectedPostSelector } from '../../../../store/selectors';
import { PostInterface } from '../../models/post.interface';
import { AppStateInterface } from '../../../../models/app-state-interface';

@Component({
  selector: 'posts-grid',
  templateUrl: './posts-grid.component.html',
  styleUrl: './posts-grid.component.css'
})

export class PostsGridComponent implements OnInit {
  public isLoading$: Observable<boolean>;
  public error$: Observable<string | null>;
  public posts$: Observable<PostInterface[]>;
  public selectedIndex: number | null = null;

  @Output() isLoadingEmitter: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() errorEmitter: EventEmitter<string | null> = new EventEmitter<string | null>();

  constructor(private store: Store<AppStateInterface>) {
    this.isLoading$ = this.store.pipe(select(isLoadingSelector));
    this.error$ = this.store.pipe(select(errorSelector));
    this.posts$ = this.store.pipe(select(postsSelector));
  }

  public dispatchActions(index: number): void {
    this.selectedIndex = index;
    this.store.dispatch(PostsActions.setCurrentSelectedProperty({ index: index + 1 }));
    this.store.dispatch(PostsActions.setSelectedPostIndex({ selectedIndex: index + 1 }));
    this.store.dispatch(PostsActions.setUpdatedPosts({ index: index }));

    this.posts$ = this.store.pipe(select(selectedPostSelector));
  }

  public ngOnInit(): void {
    this.store.dispatch(PostsActions.getPosts());
    combineLatest([this.isLoading$, this.error$]).subscribe(([isLoading, error]) => {
      this.isLoadingEmitter.emit(isLoading);
      this.errorEmitter.emit(error);
    })
  }
}
