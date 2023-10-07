import { configureStore } from '@reduxjs/toolkit';
import searchReducer from '../features/searchBar/searchSlice';
import postReducer from '../features/posts/postsSlice';
import subredditReducer from '../features/menu/menuSlice';
import commentReducer from '../features/comments/commentsSlice';

export const store = configureStore({
  reducer: {
    search: searchReducer,
    post: postReducer,
    subreddit: subredditReducer,
    comment: commentReducer
  },
});
