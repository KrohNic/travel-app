import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getError,
  getIsCountriesLoading,
  getLocale,
} from '../store/app/app.selectors';
import appStore from '../store/app';

const withDataLoader = (Component) => {
  const withDataLoader = (props) => {
    const dispatch = useDispatch();
    const isLoading = useSelector(getIsCountriesLoading);
    const locale = useSelector(getLocale);
    const { code: localeCode } = locale;
    const error = useSelector(getError);

    useEffect(() => {
      dispatch(appStore.actions.fetchCountries(localeCode));
    }, [localeCode]);

    if (error) {
      return (
        <div>
          {locale.loadingError}: {error}
        </div>
      );
    }

    if (isLoading) return <div>{locale.loading}...</div>;

    return <Component {...props} />;
  };

  withDataLoader.displayName = `withDataLoader(${
    Component.displayName || Component.name || 'Component'
  })`;

  return withDataLoader;
};

export default withDataLoader;
