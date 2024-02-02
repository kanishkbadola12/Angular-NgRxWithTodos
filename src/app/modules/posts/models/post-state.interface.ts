import { PostInterface } from './post.interface';

export interface PostsStateInterface {
  isLoading: boolean;
  posts: PostInterface[];
  error: string | null;
  updatedPosts: PostInterface[];
  currentSelectedProperty: string;
  selectedPostIndex: number;
  cardClickedCount: number;
}