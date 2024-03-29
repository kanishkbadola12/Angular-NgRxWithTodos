import { createSelector } from "@ngrx/store";
import { AppStateInterface } from "../models/app-state-interface";

export const selectFeature = (state: AppStateInterface) => state.posts;

export const isLoadingSelector = createSelector(
    selectFeature,
    (state) => state.isLoading
);

export const postsSelector = createSelector(
    selectFeature,
    (state) => state.posts
);

export const errorSelector = createSelector(
    selectFeature,
    (state) => state.error
);

export const currentSelectedPropertySelector = createSelector(
    selectFeature,
    (state) => state.currentSelectedProperty
);

export const selectedPostIndexSelector = createSelector(
    selectFeature,
    (state) => state.selectedPostIndex
);

export const selectedPostSelector = createSelector(
    selectFeature,
    (state) => state.updatedPosts
);