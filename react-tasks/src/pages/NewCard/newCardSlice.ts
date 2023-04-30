import { PayloadAction } from '@reduxjs/toolkit';
import * as toolkitRaw from '@reduxjs/toolkit';
type TypeToolkitRaw = typeof toolkitRaw & { default?: unknown };
const { createSlice } = ((toolkitRaw as TypeToolkitRaw).default ?? toolkitRaw) as typeof toolkitRaw;

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
      state.newCards = [...state.newCards, action.payload];
    },
  },
});

export const { addCard } = newCardSlice.actions;
