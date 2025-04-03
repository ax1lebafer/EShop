import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ICartState } from './types.ts';
import { ICartProduct } from '../../../types.ts';

const initialState: ICartState = {
  cartItems: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<ICartProduct>) => {
      const existingItem = state.cartItems.find(
        (item) => item.id === action.payload.id
      );

      if (existingItem) {
        existingItem.count += 1;
      } else {
        state.cartItems.push(action.payload);
      }
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload
      );
    },
    decrementProduct: (state, action: PayloadAction<number>) => {
      const product = state.cartItems.find(
        (item) => item.id === action.payload
      );
      if (product) {
        if (product.count > 1) {
          product.count -= 1;
        } else {
          state.cartItems = state.cartItems.filter(
            (item) => item.id !== action.payload
          );
        }
      }
    },
  },
});

export const { addToCart, removeFromCart, decrementProduct } =
  cartSlice.actions;

export const cartReducer = cartSlice.reducer;
