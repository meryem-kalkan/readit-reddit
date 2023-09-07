import { configureStore } from '@reduxjs/toolkit';
import searchReducer from '../features/searchBar/searchSlice';
import postReducer from '../features/posts/postsSlice';
import subredditReducer from '../features/menu/menuSlice';

export const store = configureStore({
  reducer: {
    search: searchReducer,
    post: postReducer,
    subreddit: subredditReducer
  },
});
