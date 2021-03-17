import React from 'react';
import PropTypes from 'prop-types';
import {
  WEATHER,
  WEATHER_ICO,
  WEATHER_DESCRIPTION,
  WEATHER_TITLE,
} from './classNames';
import './Weather.scss';

const Weather = ({ isLoading, error, data, locale }) => {
  if (isLoading) return <div className={WEATHER}>{locale.loading}...</div>;

  if (error) {
    return (
      <div className={WEATHER}>
        {locale.loadingErrorWeather}: {error}
      </div>
    );
  }

  const temperature = data.main.temp;
  const description = locale[data.weather[0].main];
  const icoSrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`;

  return (
    <div className={WEATHER}>
      <div>
        <h4 className={WEATHER_TITLE}>{locale.weather}</h4>
        <p className={WEATHER_DESCRIPTION}>
          {description} {temperature}°C
        </p>
      </div>
      <img className={WEATHER_ICO} src={icoSrc} alt={description} />
    </div>
  );
};

Weather.propTypes = {
  error: PropTypes.string,
  isLoading: PropTypes.bool,
  data: PropTypes.object,
  locale: PropTypes.object,
};

export default React.memo(Weather);
