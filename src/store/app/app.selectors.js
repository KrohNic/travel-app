import slice from './app.slice';

export const getSlice = (store) => store[slice.name];

export const getLocale = (store) => getSlice(store).locale;
