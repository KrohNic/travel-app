import { createSlice } from '@reduxjs/toolkit';
import { en } from '../../locales';
import * as thunkActions from './app.thunk';
import name from './app.name';

const initialState = {
  locale: en,
  countries: [],
  isCountriesLoading: false,
  error: '',
  search: '',
};

const appSlice = createSlice({
  name,
  initialState,
  reducers: {
    setLocale: (state, action) => {
      state.locale = action.payload;
    },
    setSearch: (state, action) => {
      state.search = action.payload;
    },
  },
  extraReducers: {
    [thunkActions.fetchCountries.pending]: (state) => {
      state.isCountriesLoading = true;
      state.error = '';
    },
    [thunkActions.fetchCountries.fulfilled]: (state, action) => {
      state.countries = action.payload;
      state.isCountriesLoading = false;
    },
    [thunkActions.fetchCountries.rejected]: (state, action) => {
      state.isCountriesLoading = false;
      state.error = action.error;
    },
  },
});

const { actions, reducer } = appSlice;

export default { reducer, name, actions: { ...actions, ...thunkActions } };
