import { PayloadAction, createSlice } from '@reduxjs/toolkit';
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
