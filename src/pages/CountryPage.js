import React from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header/Header';
import Wrapper from '../components/Wrapper/Wrapper';

const CountryPage = (props) => {
  console.log(props);
  const countryQuery = props.match.params.id || '';

  return (
    <React.Fragment>
      <Header />
      <Wrapper>{countryQuery}</Wrapper>
    </React.Fragment>
  );
};

CountryPage.propTypes = {
  match: PropTypes.object,
};

export default CountryPage;
