import { combineReducers, configureStore } from '@reduxjs/toolkit';
import {
  TypedUseSelectorHook,
  useDispatch,
  useSelector,
  useStore,
} from 'react-redux';
import { cartReducer } from './reducers/Cart/Cart.tsx';
import { favoriteReducer } from './reducers/Favorite/Favorite.tsx';

export const makeStore = () => {
  return configureStore({
    reducer: combineReducers({
      cart: cartReducer,
      favorite: favoriteReducer,
    }),
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppStore: () => AppStore = useStore;
