import React, { useCallback, useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { FormControl, InputLabel, MenuItem, Select } from '@material-ui/core';
import * as localesObj from '../../locales';
import appStore from '../../store/app';
import {
  LABEL_ID,
  LOCALE_CLASSNAME,
  LOCALE_FLAG_CLASSNAME,
  LOCALE_ITEM_CLASSNAME,
  LOCALE_STORAGE_NAME,
} from './constants';
import './LocaleSelect.scss';

const LocaleSelect = React.memo(function LocaleSelect({
  currentLocale,
  handleChange,
  localesList,
}) {
  const localeMenuItemsList = useMemo(() => {
    return localesList.map((locale) => (
      <MenuItem key={locale.locale} value={locale}>
        <div className={LOCALE_ITEM_CLASSNAME}>
          <img
            className={LOCALE_FLAG_CLASSNAME}
            alt={locale.locale}
            src={locale.flag}
          />
          {locale.locale}
        </div>
      </MenuItem>
    ));
  }, [localesObj]);

  return (
    <FormControl className={LOCALE_CLASSNAME}>
      <InputLabel id={LABEL_ID}>{currentLocale.language}</InputLabel>
      <Select labelId={LABEL_ID} value={currentLocale} onChange={handleChange}>
        {localeMenuItemsList}
      </Select>
    </FormControl>
  );
});

LocaleSelect.propTypes = {
  currentLocale: PropTypes.object,
  handleChange: PropTypes.function,
  localesList: PropTypes.array,
};

const LocaleSelectContainer = () => {
  const dispatch = useDispatch();
  const locale = useSelector(appStore.selectors.getLocale);
  const handleChange = useCallback((event) => {
    dispatch(appStore.actions.setLocale(event.target.value));
  }, []);
  const localesList = useMemo(() => Object.values(localesObj), [localesObj]);

  useEffect(() => {
    const localeName = localStorage.getItem(LOCALE_STORAGE_NAME);

    if (!localeName) return;

    const locale = localesList.find((item) => item.locale === localeName);

    if (!locale) return;

    dispatch(appStore.actions.setLocale(locale));
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCALE_STORAGE_NAME, locale.locale);
  }, [locale]);

  return (
    <LocaleSelect
      localesList={localesList}
      currentLocale={locale}
      handleChange={handleChange}
    />
  );
};

export default LocaleSelectContainer;
