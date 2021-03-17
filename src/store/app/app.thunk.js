import { createAsyncThunk } from '@reduxjs/toolkit';
import convertData from '../../common/convertData';
import name from './app.name';

export const fetchCountries = createAsyncThunk(
  `${name}/fetchCountriesStatus`,
  async (localeCode) => {
    const storageKey = `countries${localeCode}`;
    const savedData = window.sessionStorage.getItem(storageKey);

    if (savedData) return JSON.parse(savedData);

    const publicDir = process.env.PUBLIC_URL;
    const dataUrl = `${publicDir}assets/data/countries-${localeCode}.json`;
    const response = await fetch(dataUrl);
    const originalData = await response.json();
    const data = convertData(originalData);

    window.sessionStorage.setItem(storageKey, JSON.stringify(data));

    return data;
  }
);
