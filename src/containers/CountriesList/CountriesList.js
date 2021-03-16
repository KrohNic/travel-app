import React from 'react';
import { useSelector } from 'react-redux';
import {
  getCountries,
  getError,
  getIsCountriesLoading,
  getLocale,
} from '../../store/app/app.selectors';
import CountriesItem from '../../components/CountriesItem/CountriesItem';
import { COUNTRIES_LIST } from './classNames';
import './CountriesList.scss';

const CountriesList = () => {
  const isLoading = useSelector(getIsCountriesLoading);
  const countryList = useSelector(getCountries);
  const locale = useSelector(getLocale);
  const error = useSelector(getError);

  if (isLoading) return <div>{locale.loading}</div>;

  if (error) {
    return (
      <div>
        {locale.loadingError}: {error}
      </div>
    );
  }

  const countriesItems = countryList.map((item) => (
    <CountriesItem key={item['route']} data={item} locale={locale} />
  ));

  return <div className={COUNTRIES_LIST}>{countriesItems}</div>;
};

export default CountriesList;
