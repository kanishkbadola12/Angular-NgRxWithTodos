import { createReducer, on } from '@ngrx/store';
import { PostsStateInterface } from '../models/post-state.interface'
import * as PostsActions from './actions';
import { PostInterface } from '../models/post.interface';

export const initialState: PostsStateInterface = {
    isLoading: false,
    posts: [],
    error: null,
    selectedPost: null
};

export const reducers = createReducer(
    initialState,
    on(PostsActions.getPosts, (state) => ({ ...state, isLoading: true })),

    on(PostsActions.getPostsSuccess, (state, action) => ({
        ...state,
        isLoading: false,
        posts: action.posts
    })),

    on(PostsActions.getPostsFailure, (state, action) => ({
        ...state,
        isLoading: false,
        error: action.error
    })),

    on(PostsActions.selectPost, (state, action) => {
        const selectedPost: PostInterface = state.posts[action.index];
        return {
            ...state,
            selectedPost: selectedPost
        }
    }),

    // on(PostsActions.togglePostDetails, (state) => {
    //     if (state.selectedPostIndex !== null) {
    //         const updatedPosts = [...state.posts];
    //         const selectedPost = { ...updatedPosts[state.selectedPostIndex] };
    //         selectedPost.title = selectedPost.userId;
    //         updatedPosts[state.selectedPostIndex] = selectedPost;
    //         return {
    //             ...state,
    //             posts: updatedPosts
    //         }
    //     }

    //     return state;
    // }),
);