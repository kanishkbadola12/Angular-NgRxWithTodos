import { createAction, props } from '@ngrx/store';
import { PostInterface } from '../modules/posts/models/post.interface';

export const getPosts = createAction('[Posts] Get Posts');

export const getPostsSuccess = createAction('[Posts] Get Posts Success',props<{ posts: PostInterface[] }>());

export const getPostsFailure = createAction('[Posts] Get Posts Failure', props<{ error: string }>());

export const setCurrentSelectedProperty = createAction('[Posts] Update Last Selected Property', props<{ index: number }>());

export const setUpdatedPosts = createAction('[Posts] Select New Posts', props<{ index: number }>());

export const setSelectedPostIndex = createAction('[Posts] Update Selected Post Index', props<{ selectedIndex: number }>());