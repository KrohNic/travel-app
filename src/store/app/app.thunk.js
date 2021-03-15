import { createAsyncThunk } from '@reduxjs/toolkit';
import name from './app.name';

export const fetchCountries = createAsyncThunk(
  `${name}/fetchCountriesStatus`,
  async () => {
    const dataUrl = process.env.PUBLIC_URL + 'assets/data/countries.json';
    const response = await fetch(dataUrl);
    const data = await response.json();

    return data;
  }
);
