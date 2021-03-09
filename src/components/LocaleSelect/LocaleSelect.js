import React, { useCallback, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FormControl, InputLabel, MenuItem, Select } from '@material-ui/core';
import * as localesObj from '../../locales';
import appStore from '../../store/app';
import {
  LABEL_ID,
  LOCALE_CLASSNAME,
  LOCALE_FLAG_CLASSNAME,
  LOCALE_ITEM_CLASSNAME,
} from './constants';
import './LocaleSelect.scss';

const LocaleSelect = () => {
  const dispatch = useDispatch();
  const currentLocale = useSelector(appStore.selectors.getLocale);
  const handleChange = useCallback((event) => {
    dispatch(appStore.actions.setLocale(event.target.value));
  }, []);

  const localeMenuItemsList = useMemo(() => {
    const localesList = Object.values(localesObj);

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
};

export default LocaleSelect;
