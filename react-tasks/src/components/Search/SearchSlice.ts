import { PayloadAction } from '@reduxjs/toolkit';
import * as toolkitRaw from '@reduxjs/toolkit';
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const { createSlice } = ((toolkitRaw as any).default ?? toolkitRaw) as typeof toolkitRaw;

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
      console.log(action.payload);
      state.value = action.payload;
    },
  },
});

export const { update } = searchTextSlice.actions;

export default searchTextSlice.reducer;
