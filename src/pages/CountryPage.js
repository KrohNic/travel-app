import React from 'react';
import PropTypes from 'prop-types';

const CountryPage = (props) => {
  console.log(props);
  const countryQuery = props.match.params.id || '';

  return <div>{countryQuery}</div>;
};

CountryPage.propTypes = {
  match: PropTypes.object,
};

export default CountryPage;
