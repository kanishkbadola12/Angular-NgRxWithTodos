import { createAction, props } from '@ngrx/store';
import { PostInterface } from '../modules/posts/models/post.interface';

export const getPosts = createAction('[Posts] Get Posts');

export const getPostsSuccess = createAction(
    '[Posts] Get Posts Success',
    props<{ posts: PostInterface[] }>()
);

export const getPostsFailure = createAction(
    '[Posts] Get Posts Failure',
    props<{ error: string }>()
);

export const setCurrentSelectedProperty = createAction(
    '[Posts] Update Last Selected Property', 
    props<{ property: string }>()
);


export const setUpdatedPosts = createAction('[Posts] Update Selected Post', props<{ index: number }>());

export const setSelectedPostIndex = createAction('[Posts] Update Selected Post Index', props<{ index: number }>());