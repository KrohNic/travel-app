import slice from './app.slice';

export const getSlice = (store) => store[slice.name];

export const getLocale = (store) => getSlice(store).locale;

export const getCountries = (store) => getSlice(store).countries;

export const getError = (store) => getSlice(store).error;

export const getIsCountriesLoading = (store) =>
  getSlice(store).isCountriesLoading;
