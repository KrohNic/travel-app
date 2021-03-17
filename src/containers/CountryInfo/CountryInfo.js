import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { getCountries, getLocale } from '../../store/app/app.selectors';
import Map from '../../components/Map';
import Video from '../../components/Video';
import './CountryInfo.scss';

const CountryInfo = ({ country }) => {
  const locale = useSelector(getLocale);
  const countries = useSelector(getCountries);
  const data = countries.find((item) => item.route === country);

  if (!data) return <div>Error</div>;

  return (
    <React.Fragment>
      <h2>{data.country}</h2>
      <p>
        {locale.capital}: {data.capital}
      </p>
      <p>
        {data.description}
        <img src={data.image} alt={data.country} />
      </p>
      <Map coord={data.coordinates} />
      <Video src={data.video} />
    </React.Fragment>
  );
};

CountryInfo.propTypes = {
  country: PropTypes.string,
};

export default CountryInfo;
