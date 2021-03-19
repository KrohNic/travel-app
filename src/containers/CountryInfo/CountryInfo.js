import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { getCountries, getLocale } from '../../store/app/app.selectors';
import Map from '../../components/Map';
import Video from '../../components/Video';
import WeatherContainer from '../WeatherContainer/WeatherContainer';
import { ASIDE, COUNTRY, TITLE, IMAGE, MAP, VIDEO, INFO } from './classNames';
import './CountryInfo.scss';

const CountryInfo = ({ country }) => {
  const locale = useSelector(getLocale);
  const countries = useSelector(getCountries);
  const data = countries.find((item) => item.route === country);

  if (!data) return <div>{locale.error}</div>;

  return (
    <div className={COUNTRY}>
      <h2 className={TITLE}>{data.country}</h2>
      <div className={INFO}>
        <div>
          <p>
            {locale.capital}: {data.capital}
          </p>
          <p>{data.description}</p>
        </div>
        <aside className={ASIDE}>
          <WeatherContainer coord={data.coordinates} locale={locale} />
        </aside>
      </div>

      <img className={IMAGE} src={data.image} alt={data.country} />
      <div className={MAP}>
        <Map coord={data.coordinates} />
      </div>
      <div className={VIDEO}>
        <Video src={data.video} />
      </div>
    </div>
  );
};

CountryInfo.propTypes = {
  country: PropTypes.string,
};

export default CountryInfo;
