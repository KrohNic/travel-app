import { createSlice } from '@reduxjs/toolkit';
import { en } from '../../locales';

const initialState = {
  locale: en,
};

const appSlice = createSlice({
  name: 'appSlice',
  initialState,
  reducers: {
    setLocale: (state, action) => {
      state.locale = action.payload;
    },
  },
});

const { actions, reducer, name } = appSlice;

export default { reducer, name, actions };
