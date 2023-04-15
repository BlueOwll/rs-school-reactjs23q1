import { configureStore } from '@reduxjs/toolkit';
import { searchTextSlice } from '../components/Search/SearchSlice';

export const store = configureStore({
  reducer: {
    searchText: searchTextSlice.reducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
