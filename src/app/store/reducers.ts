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
    currentSelectedProperty: '',
    cardClickedCount: 0
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

    on(PostsActions.setCurrentSelectedProperty, (state, action) => {
        const properties = ['title', 'userId', 'id', 'completed'];
        let count = state.cardClickedCount;

        if (action.index === state.selectedPostIndex) {
            count = state.cardClickedCount;
            count = (count + 1) % properties.length;
        } else {
            count = 1;
        }

        return {
            ...state,
            cardClickedCount: count,
            currentSelectedProperty: properties[count]
        }
    }),

    on(PostsActions.setSelectedPostIndex, (state, action) => ({
        ...state,
        selectedPostIndex: action.selectedIndex
    })),

    on(PostsActions.setUpdatedPosts, (state, action) => {
        let updatedPosts = [];
        const selectedPost = state.posts[action.index];
        const updatedPost = {
            ...selectedPost,
            title: selectedPost[state.currentSelectedProperty as keyof PostInterface]
        };

        updatedPosts = state.posts.map((post, index) => {
            if (index === action.index) {
                return updatedPost;
            }
            return post;
        });
    
        return {
            ...state,
            updatedPosts: updatedPosts
        };
    }),
);