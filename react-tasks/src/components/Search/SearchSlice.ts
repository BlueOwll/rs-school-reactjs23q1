import { PayloadAction } from '@reduxjs/toolkit';
import * as toolkitRaw from '@reduxjs/toolkit';
type TypeToolkitRaw = typeof toolkitRaw & { default?: unknown };
const { createSlice } = ((toolkitRaw as TypeToolkitRaw).default ?? toolkitRaw) as typeof toolkitRaw;

export interface SearchTextState {
  value: string;
}

const initialState: SearchTextState = {
  value: '',
};

export const searchTextSlice = createSlice({
  name: 'searchText',
  initialState,
  reducers: {
    update: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
  },
});

export const { update } = searchTextSlice.actions;

export default searchTextSlice.reducer;
