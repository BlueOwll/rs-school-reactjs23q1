import * as toolkitRaw from '@reduxjs/toolkit';
type TypeToolkitRaw = typeof toolkitRaw & { default?: unknown };
const { combineReducers, configureStore } = ((toolkitRaw as TypeToolkitRaw).default ??
  toolkitRaw) as typeof toolkitRaw;

import { searchTextSlice } from '../components/Search/SearchSlice';
import { flickrApi } from '../components/Api/FlickrApi';
import { newCardSlice } from '../pages/NewCard/newCardSlice';

export const rootReducer = combineReducers({
  searchText: searchTextSlice.reducer,
  newCard: newCardSlice.reducer,
  [flickrApi.reducerPath]: flickrApi.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(flickrApi.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
