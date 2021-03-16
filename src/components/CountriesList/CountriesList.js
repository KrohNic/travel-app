import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  getCountries,
  getError,
  getIsCountriesLoading,
  getLocale,
} from '../../store/app/app.selectors';
import {
  COUNTRIES_ITEM,
  COUNTRIES_LIST,
  COUNTRIES_BLACKOUT,
} from './classNames';
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

  const countriesItems = countryList.map((item) => {
    const countryName = item['country'];
    const capital = item['capital'];
    const route = item['route'];
    const imageURL = `${process.env.PUBLIC_URL}assets/images/${route}.png`;

    return (
      <Link
        to={`/${route}`}
        className={COUNTRIES_ITEM}
        key={countryName}
        style={{
          backgroundImage: `url(${imageURL})`,
        }}
      >
        <div className={COUNTRIES_BLACKOUT}>
          <h2>{countryName.toUpperCase()}</h2>
          <span>
            {locale.capital}: <b>{capital}</b>
          </span>
        </div>
      </Link>
    );
  });

  return <div className={COUNTRIES_LIST}>{countriesItems}</div>;
};

export default CountriesList;
