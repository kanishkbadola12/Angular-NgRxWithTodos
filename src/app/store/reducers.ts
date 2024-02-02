import { createReducer, on } from '@ngrx/store';
import * as PostsActions from './actions';
import { PostInterface } from '../modules/posts/models/post.interface';
import { PostsStateInterface } from '../modules/posts/models/post-state.interface';

export const initialState: PostsStateInterface = {
    isLoading: false,
    posts: [],
    error: null,
    selectedPostIndex: 0,
    updatedPosts: [],
    currentSelectedProperty: 'title'
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

    on(PostsActions.setCurrentSelectedProperty, (state, action) => ({
        ...state,
        currentSelectedProperty: action.property
    })),

    on(PostsActions.setSelectedPostIndex, (state, action) => ({
        ...state,
        selectedPostIndex: action.index
    })),

    on(PostsActions.setUpdatedPosts, (state, action) => {
        const selectedPost = state.posts[action.index];
        const updatedPost = {
            ...selectedPost,
            title: selectedPost[state.currentSelectedProperty as keyof PostInterface]
        };

        const updatedPosts = [
            ...state.posts.slice(0, action.index),
            updatedPost,
            ...state.posts.slice(action.index + 1),
        ]

        return {
            ...state,
            updatedPosts: updatedPosts
        }
    }),
);