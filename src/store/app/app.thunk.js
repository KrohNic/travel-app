import { createAsyncThunk } from '@reduxjs/toolkit';
import convertData from '../../common/convertData';
import name from './app.name';

export const fetchCountries = createAsyncThunk(
  `${name}/fetchCountriesStatus`,
  async (localeCode) => {
    const publicDir = process.env.PUBLIC_URL;
    const dataUrl = `${publicDir}assets/data/countries-${localeCode}.json`;
    const response = await fetch(dataUrl);
    const data = await response.json();

    return convertData(data);
  }
);
