import React from 'react';
import { useSelector } from 'react-redux';
import {
  getCountries,
  getLocale,
  getSearch,
} from '../../store/app/app.selectors';
import CountriesItem from '../../components/CountriesItem/CountriesItem';
import filterCountries from '../../common/filterCountries';
import { COUNTRIES_LIST } from './classNames';
import './CountriesList.scss';

const CountriesList = () => {
  const countries = useSelector(getCountries);
  const locale = useSelector(getLocale);
  const searchTerm = useSelector(getSearch);
  const filteredCountries = filterCountries(
    countries,
    searchTerm.toLowerCase()
  );

  if (!filteredCountries.length)
    return <div className={COUNTRIES_LIST}>{locale.noSearchResults}</div>;

  const countriesItems = filteredCountries.map((item) => (
    <CountriesItem key={item.route} data={item} locale={locale} />
  ));

  return <div className={COUNTRIES_LIST}>{countriesItems}</div>;
};

export default CountriesList;
