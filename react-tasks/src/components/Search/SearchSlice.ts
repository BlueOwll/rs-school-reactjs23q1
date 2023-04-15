import { PayloadAction, createSlice } from '@reduxjs/toolkit';

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
