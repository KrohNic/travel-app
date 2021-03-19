import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Weather from '../../components/Weather/Weather';

const WeatherContainer = ({ coord, locale }) => {
  const [{ error, isLoading, data }, setLoadingState] = useState({
    data: null,
    error: '',
    isLoading: true,
  });

  useEffect(async () => {
    try {
      const [lat, lon] = coord.split(',');
      const url = new URL('https://api.openweathermap.org/data/2.5/weather');

      url.searchParams.set('lat', lat);
      url.searchParams.set('lon', lon);
      url.searchParams.set('units', 'metric');
      url.searchParams.set('lang', 'en');
      url.searchParams.set('APPID', '22566147b6b6e5f37273843ba13ea235');

      const raw = await fetch(url);
      const data = await raw.json();

      setLoadingState({ data, error: '', isLoading: false });
    } catch (e) {
      setLoadingState({ data: null, error: e, isLoading: false });
    }
  }, []);

  const props = { isLoading, data, error, locale };

  return <Weather {...props} />;
};

WeatherContainer.propTypes = {
  coord: PropTypes.string,
  locale: PropTypes.object,
};

export default React.memo(WeatherContainer);
