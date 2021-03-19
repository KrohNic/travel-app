import React from 'react';
import PropTypes from 'prop-types';
import { LOCALE_ITEM_CLASSNAME } from './constants';

const LocaleOption = ({ localeName }) => (
  <option value={localeName} className={LOCALE_ITEM_CLASSNAME}>
    {localeName}
  </option>
);

LocaleOption.propTypes = {
  localeName: PropTypes.string,
};

export default LocaleOption;
