import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  getCountries,
  getError,
  getIsCountriesLoading,
} from '../../store/app/app.selectors';
import appStore from '../../store/app';
import { COUNTRIES_ITEM, COUNTRIES_LIST } from './classNames';
import './MainPage.scss';

const MainPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsCountriesLoading);
  const countryList = useSelector(getCountries);
  const error = useSelector(getError);

  useEffect(async () => {
    dispatch(appStore.actions.fetchCountries());
  }, []);

  if (isLoading) return <div>loading...</div>;

  if (error) return <div>Loading error: {error}</div>;

  return (
    <div className={COUNTRIES_LIST}>
      {countryList.map((item) => {
        const countryName = item['country'];
        const capital = item['capital'];

        return (
          <Link
            to={`/countries/${countryName}`}
            className={COUNTRIES_ITEM}
            key={countryName}
          >
            <h2>{countryName.toUpperCase()}</h2>
            <span>
              Capital: <b>{capital}</b>
            </span>
          </Link>
        );
      })}
    </div>
  );
};

export default MainPage;
