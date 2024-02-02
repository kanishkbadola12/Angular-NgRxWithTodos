import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import * as PostsActions from './actions';
import { catchError, map, mergeMap, of } from "rxjs";
import { PostsService } from "../services/posts.service";

@Injectable()
export class PostEffects {
    constructor(private actions$: Actions, private postsService: PostsService) { }

    getPosts$ = createEffect(() =>
        this.actions$.pipe(
            ofType(PostsActions.getPosts),
            mergeMap(() => {
                return this.postsService
                    .getFirst100Posts()
                    .pipe(
                        map((posts) => PostsActions.getPostsSuccess({ posts })),
                        catchError(error => of(PostsActions.getPostsFailure({ error: error.message })))
                    );
            })
        )
    );
}