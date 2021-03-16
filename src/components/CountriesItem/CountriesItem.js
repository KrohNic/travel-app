import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { COUNTRIES_ITEM, COUNTRIES_BLACKOUT } from './classNames';
import './CountriesItem.scss';

const CountriesItem = ({ data, locale }) => {
  const countryName = data['country'];
  const capital = data['capital'];
  const route = data['route'];
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
};

CountriesItem.propTypes = {
  data: PropTypes.object,
  locale: PropTypes.object,
};

export default CountriesItem;
