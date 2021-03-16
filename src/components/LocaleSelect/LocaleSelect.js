import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import localesLookup from '../../locales/localesLookup';
import {
  LABEL_ID,
  LOCALE_CLASSNAME,
  LOCALE_SELECT_CLASSNAME,
} from './constants';
import LocaleOption from './LocaleOption';
import './LocaleSelect.scss';

const LocaleSelect = ({ currentLocale, handleChange }) => {
  const localeMenuItemsList = useMemo(() => {
    const localesList = Object.values(localesLookup);

    return localesList.map((locale) => (
      <LocaleOption key={locale.locale} localeName={locale.locale} />
    ));
  }, [localesLookup]);

  return (
    <div className={LOCALE_CLASSNAME}>
      <label htmlFor={LABEL_ID}>{currentLocale.language}</label>
      <select
        className={LOCALE_SELECT_CLASSNAME}
        id={LABEL_ID}
        onChange={handleChange}
        value={currentLocale.locale}
      >
        {localeMenuItemsList}
      </select>
    </div>
  );
};

LocaleSelect.propTypes = {
  currentLocale: PropTypes.object,
  handleChange: PropTypes.func,
};

export default LocaleSelect;
