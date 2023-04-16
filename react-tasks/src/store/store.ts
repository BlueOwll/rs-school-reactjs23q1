import { configureStore } from '@reduxjs/toolkit';
import { searchTextSlice } from '../components/Search/SearchSlice';
import { flickrApi } from '../components/Api/FlickrApi';
import { newCardSlice } from '../pages/NewCard/newCardSlice';

export const store = configureStore({
  reducer: {
    searchText: searchTextSlice.reducer,
    newCard: newCardSlice.reducer,
    [flickrApi.reducerPath]: flickrApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(flickrApi.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
