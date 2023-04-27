import { PayloadAction } from '@reduxjs/toolkit';
import * as toolkitRaw from '@reduxjs/toolkit';
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const { createSlice } = ((toolkitRaw as any).default ?? toolkitRaw) as typeof toolkitRaw;

import { ICardProps } from '../../components/Card/Card';

export interface NewCardsState {
  newCards: ICardProps[];
}

const initialState: NewCardsState = {
  newCards: [],
};

export const newCardSlice = createSlice({
  name: 'newCard',
  initialState,
  reducers: {
    addCard: (state, action: PayloadAction<ICardProps>) => {
      console.log(action.payload);
      state.newCards = [...state.newCards, action.payload];
    },
  },
});

export const { addCard } = newCardSlice.actions;
