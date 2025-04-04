import { IFavoriteState } from './types.ts';
import { createSlice } from '@reduxjs/toolkit';

const initialState: IFavoriteState = {
  favoriteItems: [],
};

const favoriteSlice = createSlice({
  name: 'favorite',
  initialState,
  reducers: {},
});

export const favoriteReducer = favoriteSlice.reducer;
