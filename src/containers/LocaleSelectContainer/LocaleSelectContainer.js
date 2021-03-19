import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import appStore from '../../store/app';
import localesLookup from '../../locales/localesLookup';
import LocaleSelect from '../../components/LocaleSelect/LocaleSelect';
import { LOCALE_STORAGE_NAME } from './constants';

const LocaleSelectContainer = () => {
  const dispatch = useDispatch();
  const locale = useSelector(appStore.selectors.getLocale);
  const handleChange = useCallback((event) => {
    const localeName = event.target.value;
    const selectedLocale = localesLookup[localeName];

    localStorage.setItem(LOCALE_STORAGE_NAME, localeName);
    dispatch(appStore.actions.setLocale(selectedLocale));
  }, []);

  useEffect(() => {
    const savedLocaleName = localStorage.getItem(LOCALE_STORAGE_NAME);
    const savedLocale = localesLookup[savedLocaleName];

    if (savedLocale) dispatch(appStore.actions.setLocale(savedLocale));
  }, []);

  return <LocaleSelect currentLocale={locale} handleChange={handleChange} />;
};

export default LocaleSelectContainer;
