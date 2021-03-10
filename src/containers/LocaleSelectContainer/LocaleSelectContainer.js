import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import appStore from '../../store/app';
import localesLookup from '../../locales/localesLookup';
import LocaleSelect from '../../components/LocaleSelect/LocaleSelect';
import { LOCALE_STORAGE_NAME } from './constants';

const LocaleSelectContainer = () => {
  const dispatch = useDispatch();
  const localeName = useSelector(appStore.selectors.getLocale);
  const locale = localesLookup[localeName];
  const handleChange = useCallback((event) => {
    dispatch(appStore.actions.setLocale(event.target.value));
  }, []);

  useEffect(() => {
    const savedLocaleName = localStorage.getItem(LOCALE_STORAGE_NAME);

    if (savedLocaleName) dispatch(appStore.actions.setLocale(savedLocaleName));
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCALE_STORAGE_NAME, localeName);
  }, [localeName]);

  return <LocaleSelect currentLocale={locale} handleChange={handleChange} />;
};

export default LocaleSelectContainer;
