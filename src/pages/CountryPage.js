import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header/Header';
import Wrapper from '../components/Wrapper/Wrapper';
import CountryInfoWithDataLoader from '../containers/CountryInfo/CountryInfoWithDataLoader';

const CountryPage = ({ match }) => {
  const route = match.params.id || '';

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <React.Fragment>
      <Header />
      <Wrapper>
        <CountryInfoWithDataLoader country={route} />
      </Wrapper>
    </React.Fragment>
  );
};

CountryPage.propTypes = {
  match: PropTypes.object,
};

export default CountryPage;
