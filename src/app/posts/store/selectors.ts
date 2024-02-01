import { createSelector } from "@ngrx/store";
import { AppStateInterface } from "../../models/app-state-interface";

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

export const selectedPostSelector = createSelector(
    selectFeature,
    (state) => state.selectedPost
);

// export const togglePostDetailsSelector = createSelector(
//     selectFeature,
//     (state) => {
//       const selectedPostIndex = state.selectedPostIndex;
//       const posts = state.posts;
  
//       if (selectedPostIndex !== null && selectedPostIndex < posts.length) {
//         const selectedPost = posts[selectedPostIndex];
//         return selectedPost.title;
//       }
  
//       return null;
//     }
//   );