import { configureStore } from '@reduxjs/toolkit';
import searchReducer from '../features/searchBar/searchSlice';
import postReducer from '../features/posts/postsSlice';

export const store = configureStore({
  reducer: {
    search: searchReducer,
    post: postReducer
  },
});
