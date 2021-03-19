import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import appSlice from './app';

const middleware = getDefaultMiddleware({
  immutableCheck: false,
  serializableCheck: false,
  thunk: true,
});

export const store = configureStore({
  reducer: { [appSlice.name]: appSlice.reducer },
  middleware,
  devTools: process.env.NODE_ENV !== 'production',
});
