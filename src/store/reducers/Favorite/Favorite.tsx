import { IFavoriteState } from './types.ts';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IProduct } from '../../../types.ts';

const initialState: IFavoriteState = {
  favoriteItems: [],
};

const favoriteSlice = createSlice({
  name: 'favorite',
  initialState,
  reducers: {
    addToFavorite: (state, action: PayloadAction<IProduct>) => {
      const exists = state.favoriteItems.find(
        (item) => item.id === action.payload.id
      );
      if (!exists) {
        state.favoriteItems.push(action.payload);
      }
    },
    removeFromFavorite: (state, action: PayloadAction<number>) => {
      state.favoriteItems = state.favoriteItems.filter(
        (item) => item.id !== action.payload
      );
    },
  },
});

export const { addToFavorite, removeFromFavorite } = favoriteSlice.actions;

export const favoriteReducer = favoriteSlice.reducer;
